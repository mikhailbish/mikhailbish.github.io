globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const _3c4v8z2yyG = async () => {
};

const plugins = [
  _3c4v8z2yyG
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/manifest.json": {
    "type": "application/json",
    "etag": "\"147-kL35luhUIDnPQPLl3bIXGY+1dzY\"",
    "mtime": "2023-04-04T17:08:26.326Z",
    "size": 327,
    "path": "../public/manifest.json"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"d-QjJR1yKlOWbrk2jGW/0Us5ZJEF0\"",
    "mtime": "2023-04-04T17:08:26.326Z",
    "size": 13,
    "path": "../public/robots.txt"
  },
  "/file/Street_Barbell_catalog_2023.pdf": {
    "type": "application/pdf",
    "etag": "\"af1718-oAl+2r4V7TXdq/hbHRGEwiMI2H8\"",
    "mtime": "2023-03-30T15:19:52.155Z",
    "size": 11474712,
    "path": "../public/file/Street_Barbell_catalog_2023.pdf"
  },
  "/img/741.jpeg": {
    "type": "image/jpeg",
    "etag": "\"45fb6-8vAalnlCS9hAE5d2hQ05vc0QHuM\"",
    "mtime": "2023-03-14T17:53:51.375Z",
    "size": 286646,
    "path": "../public/img/741.jpeg"
  },
  "/img/747-2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"18e89-NXG3QfXEghiG6SCzYGvNTWe9nns\"",
    "mtime": "2023-03-14T17:53:48.326Z",
    "size": 102025,
    "path": "../public/img/747-2.jpeg"
  },
  "/img/749.jpeg": {
    "type": "image/jpeg",
    "etag": "\"5049a-7pF8HfLHqJG6qNOn4AfTKmqyg0M\"",
    "mtime": "2023-03-14T17:53:44.132Z",
    "size": 328858,
    "path": "../public/img/749.jpeg"
  },
  "/img/751-1.jpeg": {
    "type": "image/jpeg",
    "etag": "\"1a3bc-aiST73irur+qkOhe24NEpA/xl9s\"",
    "mtime": "2023-03-14T17:53:40.995Z",
    "size": 107452,
    "path": "../public/img/751-1.jpeg"
  },
  "/img/761-1.jpeg": {
    "type": "image/jpeg",
    "etag": "\"12a22-yb3v1OXMObiKKfLprTRkABEUnB8\"",
    "mtime": "2023-03-14T17:53:37.522Z",
    "size": 76322,
    "path": "../public/img/761-1.jpeg"
  },
  "/img/761.jpeg": {
    "type": "image/jpeg",
    "etag": "\"12a22-yb3v1OXMObiKKfLprTRkABEUnB8\"",
    "mtime": "2023-03-13T16:40:55.790Z",
    "size": 76322,
    "path": "../public/img/761.jpeg"
  },
  "/img/BG1-scaled.jpg": {
    "type": "image/jpeg",
    "etag": "\"97957-v5rKKIVH6+1McBpLliyMMIKTqPA\"",
    "mtime": "2023-03-12T15:23:24.583Z",
    "size": 620887,
    "path": "../public/img/BG1-scaled.jpg"
  },
  "/img/Block2-bg2.png": {
    "type": "image/png",
    "etag": "\"2cbc1-2IuHCyoA7lQJCikbrBFu5RSCT8c\"",
    "mtime": "2023-03-12T16:16:10.975Z",
    "size": 183233,
    "path": "../public/img/Block2-bg2.png"
  },
  "/img/Block2BG.jpg": {
    "type": "image/jpeg",
    "etag": "\"4b9eb-ZFSCjRiuwDb086mSeFQ4IzSr+h4\"",
    "mtime": "2023-03-30T16:16:26.632Z",
    "size": 309739,
    "path": "../public/img/Block2BG.jpg"
  },
  "/img/Block3BG.jpg": {
    "type": "image/jpeg",
    "etag": "\"416a6-XA1xENbiIDYGMKtecyo8iRQs6c0\"",
    "mtime": "2023-03-31T16:51:03.550Z",
    "size": 267942,
    "path": "../public/img/Block3BG.jpg"
  },
  "/img/Block6BG-scaled.jpg": {
    "type": "image/jpeg",
    "etag": "\"85a7d-G6e5ne1JQA3SqZRrdscxB4Tt0uQ\"",
    "mtime": "2023-03-31T17:22:54.231Z",
    "size": 547453,
    "path": "../public/img/Block6BG-scaled.jpg"
  },
  "/img/kristijan-arsov-N90Bi6j-Ax8-unsplash-2-140x140.jpg": {
    "type": "image/jpeg",
    "etag": "\"1678-Uzntr4iMHaFlybWmE9lfztarnvE\"",
    "mtime": "2023-03-31T18:11:11.807Z",
    "size": 5752,
    "path": "../public/img/kristijan-arsov-N90Bi6j-Ax8-unsplash-2-140x140.jpg"
  },
  "/img/norman-brown-FVaimgno3dw-unsplash-140x140.jpg": {
    "type": "image/jpeg",
    "etag": "\"14b8-OxUrLDl4NBBLNMYNeoUWkbxvNeY\"",
    "mtime": "2023-03-31T18:11:28.759Z",
    "size": 5304,
    "path": "../public/img/norman-brown-FVaimgno3dw-unsplash-140x140.jpg"
  },
  "/img/Pair_of_dumbbells.png": {
    "type": "image/png",
    "etag": "\"153084-p+NfrvYfNlIJdCRSi0dy8gj3mUM\"",
    "mtime": "2023-03-31T17:53:03.269Z",
    "size": 1388676,
    "path": "../public/img/Pair_of_dumbbells.png"
  },
  "/img/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash-140x140.jpg": {
    "type": "image/jpeg",
    "etag": "\"1225-MIJwaQmMPvStu5grYamaFMZ0n00\"",
    "mtime": "2023-03-31T18:10:51.051Z",
    "size": 4645,
    "path": "../public/img/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash-140x140.jpg"
  },
  "/img/red-scroll-down.png": {
    "type": "image/png",
    "etag": "\"20132-/UvT9kQjrkunRtgEtrd/do+vuGc\"",
    "mtime": "2023-03-31T15:08:13.495Z",
    "size": 131378,
    "path": "../public/img/red-scroll-down.png"
  },
  "/img/scroll-down-light2.png": {
    "type": "image/png",
    "etag": "\"2a808-NKJ+4N+uqzfd19qdsbZU06kBGlM\"",
    "mtime": "2023-03-29T18:34:06.298Z",
    "size": 174088,
    "path": "../public/img/scroll-down-light2.png"
  },
  "/img/sergei-sushchik-DQpUeNzRj6s-unsplash-140x140.jpg": {
    "type": "image/jpeg",
    "etag": "\"13b6-rWX7dofwDR6cX71hQEI+jWr2gVQ\"",
    "mtime": "2023-03-31T18:10:37.854Z",
    "size": 5046,
    "path": "../public/img/sergei-sushchik-DQpUeNzRj6s-unsplash-140x140.jpg"
  },
  "/js/ColorReader.js": {
    "type": "application/javascript",
    "etag": "\"bea-SKzzHUhq8GCLAWwGhNP7AwaXz/0\"",
    "mtime": "2023-03-29T20:02:44.362Z",
    "size": 3050,
    "path": "../public/js/ColorReader.js"
  },
  "/_nuxt/about.9b2b939e.js": {
    "type": "application/javascript",
    "etag": "\"81-HwVtJEFRuW/x3XFCVMM0sTj6cQE\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 129,
    "path": "../public/_nuxt/about.9b2b939e.js"
  },
  "/_nuxt/AppHeader.f28a70f2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"478-G5ifFsw+2vSMmGVm27CFYT35AUY\"",
    "mtime": "2023-04-04T21:19:57.393Z",
    "size": 1144,
    "path": "../public/_nuxt/AppHeader.f28a70f2.css"
  },
  "/_nuxt/composables.6685db36.js": {
    "type": "application/javascript",
    "etag": "\"61-3FM8/lJil+d6PGTEIJ04onteaPI\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 97,
    "path": "../public/_nuxt/composables.6685db36.js"
  },
  "/_nuxt/default.10a41914.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"61-IKfv7S93KAhtUtllpwig4A5gkFo\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 97,
    "path": "../public/_nuxt/default.10a41914.css"
  },
  "/_nuxt/default.acdffe98.js": {
    "type": "application/javascript",
    "etag": "\"11ba-ilSZLMiqcNdkbTM/vNFkxHi6sc4\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 4538,
    "path": "../public/_nuxt/default.acdffe98.js"
  },
  "/_nuxt/DetailView.b4113e70.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"20a-u6y4g/fibIQ1DEgOoZWi9HvM2BQ\"",
    "mtime": "2023-04-04T21:19:57.393Z",
    "size": 522,
    "path": "../public/_nuxt/DetailView.b4113e70.css"
  },
  "/_nuxt/DetailView.e31096cc.js": {
    "type": "application/javascript",
    "etag": "\"6e2-wPOAqRYgkGzXZD55ihcsqFbMdhU\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 1762,
    "path": "../public/_nuxt/DetailView.e31096cc.js"
  },
  "/_nuxt/entry.6c6d205e.js": {
    "type": "application/javascript",
    "etag": "\"8537d-mCYTzcygKu0LCAos7x4LSFF2aB4\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 545661,
    "path": "../public/_nuxt/entry.6c6d205e.js"
  },
  "/_nuxt/entry.8dd7cbd7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"69015-tG66XB0F/a+xbud+TfxmqUuYVzM\"",
    "mtime": "2023-04-04T21:19:57.394Z",
    "size": 430101,
    "path": "../public/_nuxt/entry.8dd7cbd7.css"
  },
  "/_nuxt/error-404.0cd4f3dd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-xSUIdUjWxTJYnmfP1riaGwPeEHA\"",
    "mtime": "2023-04-04T21:19:57.393Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.0cd4f3dd.css"
  },
  "/_nuxt/error-404.f118aca8.js": {
    "type": "application/javascript",
    "etag": "\"8ca-4PjrSFhOd8BGkLP8yn9B7sP7VuI\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 2250,
    "path": "../public/_nuxt/error-404.f118aca8.js"
  },
  "/_nuxt/error-500.748cb764.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-LfCvP8U7J9Fa9L8g6sKzV6Rcp+A\"",
    "mtime": "2023-04-04T21:19:57.394Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.748cb764.css"
  },
  "/_nuxt/error-500.e934f302.js": {
    "type": "application/javascript",
    "etag": "\"773-CbAJlvLXeFR6/PpWnOlcAUYnhLc\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 1907,
    "path": "../public/_nuxt/error-500.e934f302.js"
  },
  "/_nuxt/error-component.9fd465a5.js": {
    "type": "application/javascript",
    "etag": "\"4ad-Y/ZLj47DjgPAeekJqsDyJfF8AbI\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 1197,
    "path": "../public/_nuxt/error-component.9fd465a5.js"
  },
  "/_nuxt/fetch.80f732a7.js": {
    "type": "application/javascript",
    "etag": "\"2bcc-ogQj96qSDP0ymjRtUZtjkQfwqLY\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 11212,
    "path": "../public/_nuxt/fetch.80f732a7.js"
  },
  "/_nuxt/index.427f5371.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a3a-sapLkFah8X3DjwpN21vXlA6O/8o\"",
    "mtime": "2023-04-04T21:19:57.394Z",
    "size": 2618,
    "path": "../public/_nuxt/index.427f5371.css"
  },
  "/_nuxt/index.c875fa0d.js": {
    "type": "application/javascript",
    "etag": "\"1ed7-0SCu8a+DERUdIDUEU+w+wKQuXs4\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 7895,
    "path": "../public/_nuxt/index.c875fa0d.js"
  },
  "/_nuxt/Modal.871be74d.js": {
    "type": "application/javascript",
    "etag": "\"25b-CCEtcB6XxHZ8uGVunbwzm3O+D7o\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 603,
    "path": "../public/_nuxt/Modal.871be74d.js"
  },
  "/_nuxt/Modal.9b6eb4fa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"202-f8tse2fiKTJ46JNnI+H2CEmgzOM\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 514,
    "path": "../public/_nuxt/Modal.9b6eb4fa.css"
  },
  "/_nuxt/PageTitle.452bcc22.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"175-yHblVL0hF+meXNe2op/uOugC5QY\"",
    "mtime": "2023-04-04T21:19:57.392Z",
    "size": 373,
    "path": "../public/_nuxt/PageTitle.452bcc22.css"
  },
  "/_nuxt/PageTitle.f170a956.js": {
    "type": "application/javascript",
    "etag": "\"1d4-gtlvfPcUZj/85vUgXbT4oDELOvQ\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 468,
    "path": "../public/_nuxt/PageTitle.f170a956.js"
  },
  "/_nuxt/shop.51559da8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"596-B3lIUY+MtcOidk9GiD5eHD9Fyg0\"",
    "mtime": "2023-04-04T21:19:57.392Z",
    "size": 1430,
    "path": "../public/_nuxt/shop.51559da8.css"
  },
  "/_nuxt/shop.de7210fb.js": {
    "type": "application/javascript",
    "etag": "\"af3-bRSaZM9guoLqu+jAH8osqILNZJQ\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 2803,
    "path": "../public/_nuxt/shop.de7210fb.js"
  },
  "/_nuxt/SmallCircleButton.0b7d94f9.js": {
    "type": "application/javascript",
    "etag": "\"137-fzapPq4qmpO74aAeFFgDxQqmGwI\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 311,
    "path": "../public/_nuxt/SmallCircleButton.0b7d94f9.js"
  },
  "/_nuxt/SmallCircleButton.aaeff3fc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"15c-n37zgCqcEKF8anb8YW/XrJI+tNs\"",
    "mtime": "2023-04-04T21:19:57.392Z",
    "size": 348,
    "path": "../public/_nuxt/SmallCircleButton.aaeff3fc.css"
  },
  "/_nuxt/_id_.68d3f828.js": {
    "type": "application/javascript",
    "etag": "\"2c6-2g6nGZKdhCl4rNcB6D5jlG497XQ\"",
    "mtime": "2023-04-04T21:19:57.391Z",
    "size": 710,
    "path": "../public/_nuxt/_id_.68d3f828.js"
  },
  "/img/icon/StreetBarbellLogo.png": {
    "type": "image/png",
    "etag": "\"6b70-I0+6QxYn4MHnIw5IBxfB4LGGlzI\"",
    "mtime": "2023-04-04T17:08:26.325Z",
    "size": 27504,
    "path": "../public/img/icon/StreetBarbellLogo.png"
  },
  "/img/icon/StreetBarbellLogo.svg": {
    "type": "image/svg+xml",
    "etag": "\"9cf7-/UCJunqOoHm8pWoHUPnbuFeb/8k\"",
    "mtime": "2023-04-04T17:08:26.325Z",
    "size": 40183,
    "path": "../public/img/icon/StreetBarbellLogo.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_Lko7Bv = () => import('./index.get.mjs');
const _lazy_paAsRx = () => import('./index.get2.mjs');
const _lazy_tHBVtb = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/products', handler: _lazy_Lko7Bv, lazy: true, middleware: false, method: "get" },
  { route: '/api/products/:id', handler: _lazy_paAsRx, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_tHBVtb, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_tHBVtb, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
