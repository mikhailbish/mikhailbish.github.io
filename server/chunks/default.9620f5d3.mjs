import { useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc, a as useDisplay, b as __nuxt_component_0$1 } from './server.mjs';
import { P as PageTitleVue } from './PageTitle.8497b90f.mjs';
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

const _sfc_main$3 = {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    }
  },
  render() {
    return this.$slots.default({
      setLocale: this.onChange
    });
  },
  methods: {
    async onChange(locale) {
      console.log("Setting locale...");
      await this.$i18n.setLocale(locale.code);
      console.log("locale set!");
    }
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LanguageSwitcher.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  props: [
    "facebook",
    "instagram",
    "linkedin",
    "iconsize"
  ]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "display": "inline-flex" } }, _attrs))}><a class="ma-2" target="_blank" rel="noopener"${ssrRenderAttr("href", $props.facebook)}>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: $props.iconsize,
    length: $props.iconsize,
    icon: "fab fa-facebook-f"
  }, null, _parent));
  _push(`</a><a class="ma-2" target="_blank" rel="noopener"${ssrRenderAttr("href", $props.linkedin)}>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: $props.iconsize,
    length: $props.iconsize,
    icon: "fab fa-linkedin-in"
  }, null, _parent));
  _push(`</a><a class="ma-2" target="_blank" rel="noopener"${ssrRenderAttr("href", $props.instagram)}>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: $props.iconsize,
    length: $props.iconsize,
    icon: "fab fa-instagram"
  }, null, _parent));
  _push(`</a></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialMedia.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SocialMediaVue = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1$1 = {};
function _sfc_ssrRender$1$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ name: "relative" }, _attrs))} data-v-51e252b0>StreetBarbell</div>`);
}
const _sfc_setup$1$1 = _sfc_main$1$1.setup;
_sfc_main$1$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/logo.vue");
  return _sfc_setup$1$1 ? _sfc_setup$1$1(props, ctx) : void 0;
};
const LogoVue = /* @__PURE__ */ _export_sfc(_sfc_main$1$1, [["ssrRender", _sfc_ssrRender$1$1], ["__scopeId", "data-v-51e252b0"]]);
const _sfc_main$4 = {
  data: () => ({
    locale: {}
  }),
  methods: {
    setLocale(locale) {
      this.locale = locale;
    }
  },
  setup() {
    const { xs, mdAndUp } = useDisplay();
    return { xs, mdAndUp };
  },
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "js/ColorReader.js";
    script.defer = true;
    document.body.appendChild(script);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {
    SocialMediaVue,
    LogoVue,
    LanguageSwitcher: _sfc_main$3
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SocialMediaVue = resolveComponent("SocialMediaVue");
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_LogoVue = resolveComponent("LogoVue");
  const _component_language_switcher = _sfc_main$3;
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  if ($setup.mdAndUp) {
    _push(`<header${ssrRenderAttrs(_attrs)} data-v-d462d4d9><div name="relative" class="header-white" data-v-d462d4d9>`);
    _push(ssrRenderComponent(_component_SocialMediaVue, {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      iconsize: "fa-lg"
    }, null, _parent));
    _push(`</div><nav data-v-d462d4d9><ul class="navbar" data-v-d462d4d9><li data-v-d462d4d9>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      name: "relative",
      class: "nav-link hover-underline header-white",
      to: "/"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Home`);
        } else {
          return [
            createTextVNode("Home")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li data-v-d462d4d9>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      name: "relative",
      class: "nav-link hover-underline header-white",
      to: "/About"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`About`);
        } else {
          return [
            createTextVNode("About")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li data-v-d462d4d9>`);
    _push(ssrRenderComponent(_component_LogoVue, {
      style: { "font-weight": "700" },
      class: "logo nav-link header-white"
    }, null, _parent));
    _push(`</li><li data-v-d462d4d9>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      name: "relative",
      class: "nav-link hover-underline header-white",
      to: "/shop"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Contact Us`);
        } else {
          return [
            createTextVNode("Contact Us")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li data-v-d462d4d9><a name="relative" class="nav-link hover-underline header-white" href="file/Street_Barbell_catalog_2023.pdf" data-v-d462d4d9>Catalog</a></li>`);
    _push(ssrRenderComponent(_component_language_switcher, null, {
      default: withCtx(({ setLocale }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<li data-v-d462d4d9${_scopeId}><div class="nav-link hover-underline header-white" data-v-d462d4d9${_scopeId}>English</div></li><li data-v-d462d4d9${_scopeId}><div class="nav-link hover-underline header-white" data-v-d462d4d9${_scopeId}>Russian</div></li><li data-v-d462d4d9${_scopeId}><div class="nav-link hover-underline header-white" data-v-d462d4d9${_scopeId}>Finnish</div></li>`);
        } else {
          return [
            createVNode("li", null, [
              createVNode("div", {
                onClick: ($event) => setLocale({ code: "en" }),
                class: "nav-link hover-underline header-white"
              }, "English", 8, ["onClick"])
            ]),
            createVNode("li", null, [
              createVNode("div", {
                onClick: ($event) => setLocale({ code: "ru" }),
                class: "nav-link hover-underline header-white"
              }, "Russian", 8, ["onClick"])
            ]),
            createVNode("li", null, [
              createVNode("div", {
                onClick: ($event) => setLocale({ code: "fi" }),
                class: "nav-link hover-underline header-white"
              }, "Finnish", 8, ["onClick"])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</ul></nav><div name="relative" class="controls header-white" data-v-d462d4d9>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      class: "fa-lg",
      icon: "fas fa-bars"
    }, null, _parent));
    _push(`</div></header>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AppHeaderVue = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-d462d4d9"]]);

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  _push(ssrRenderComponent(_component_v_container, mergeProps({
    style: { "padding": "0" },
    class: "fill-height",
    fluid: ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p${_scopeId3}>Location: Ohrahuhdantie 4, Helsinki, Finland</p>`);
                  } else {
                    return [
                      createVNode("p", null, "Location: Ohrahuhdantie 4, Helsinki, Finland")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<a${_scopeId3}>Privacy Policy</a><a${_scopeId3}>Legal</a><a${_scopeId3}>Terms &amp; Conditions</a>`);
                  } else {
                    return [
                      createVNode("a", null, "Privacy Policy"),
                      createVNode("a", null, "Legal"),
                      createVNode("a", null, "Terms & Conditions")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p${_scopeId3}> Contacts: info@streetbarbell.com +3580137291313</p>`);
                  } else {
                    return [
                      createVNode("p", null, " Contacts: info@streetbarbell.com +3580137291313")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, null, {
                  default: withCtx(() => [
                    createVNode("p", null, "Location: Ohrahuhdantie 4, Helsinki, Finland")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, null, {
                  default: withCtx(() => [
                    createVNode("a", null, "Privacy Policy"),
                    createVNode("a", null, "Legal"),
                    createVNode("a", null, "Terms & Conditions")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, null, {
                  default: withCtx(() => [
                    createVNode("p", null, " Contacts: info@streetbarbell.com +3580137291313")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, null, {
            default: withCtx(() => [
              createVNode(_component_v_col, null, {
                default: withCtx(() => [
                  createVNode("p", null, "Location: Ohrahuhdantie 4, Helsinki, Finland")
                ]),
                _: 1
              }),
              createVNode(_component_v_col, null, {
                default: withCtx(() => [
                  createVNode("a", null, "Privacy Policy"),
                  createVNode("a", null, "Legal"),
                  createVNode("a", null, "Terms & Conditions")
                ]),
                _: 1
              }),
              createVNode(_component_v_col, null, {
                default: withCtx(() => [
                  createVNode("p", null, " Contacts: info@streetbarbell.com +3580137291313")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppFooterVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  head: (ctx) => ({
    title: ctx.$t("title")
  }),
  components: {
    AppFooterVue,
    AppHeaderVue,
    PageTitleVue
  },
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppHeaderVue = resolveComponent("AppHeaderVue");
  const _component_AppFooterVue = resolveComponent("AppFooterVue");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-3680a4e0><div class="header-container" data-v-3680a4e0>`);
  _push(ssrRenderComponent(_component_AppHeaderVue, null, null, _parent));
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<div class="footer-container" data-v-3680a4e0>`);
  _push(ssrRenderComponent(_component_AppFooterVue, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3680a4e0"]]);

export { _default as default };
//# sourceMappingURL=default.9620f5d3.mjs.map
