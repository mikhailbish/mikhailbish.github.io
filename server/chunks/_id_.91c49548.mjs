import { _ as __nuxt_component_2 } from './DetailView.f95420a1.mjs';
import { d as useRoute, _ as _export_sfc } from './server.mjs';
import { useSSRContext } from 'vue';
import { u as useFetch } from './fetch.92e36308.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './SmallCircleButton.9b85c2c4.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  async setup() {
    var _a, _b;
    try {
      const route = useRoute();
      const { data } = await useFetch(`/api/products/${(_a = route == null ? void 0 : route.params) == null ? void 0 : _a.id}`, "$gR0zn64YPp");
      console.log("route", (_b = route == null ? void 0 : route.params) == null ? void 0 : _b.id);
      console.log("data", data);
      return { someItems: data.value };
    } catch (err) {
      console.log("Failed to get items");
      console.log("Error:", err);
    }
  },
  components: {
    "detail-view": __nuxt_component_2
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_detail_view = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_detail_view, { details: _ctx.someItems }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/items/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_.91c49548.mjs.map
