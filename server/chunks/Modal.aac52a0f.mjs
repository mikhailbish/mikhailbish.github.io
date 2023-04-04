import __nuxt_component_0 from './SmallCircleButton.9b85c2c4.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
  props: [
    "open"
  ],
  methods: {
    closeClicked() {
      this.$emit("close");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Small_circle_button = __nuxt_component_0;
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  if ($props.open) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal" }, _attrs))} data-v-375820e4><div class="modal-content" data-v-375820e4>`);
    _push(ssrRenderComponent(_component_Small_circle_button, {
      class: "close",
      onClick: $options.closeClicked
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-xmark" }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-xmark" })
          ];
        }
      }),
      _: 1
    }, _parent));
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-375820e4"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=Modal.aac52a0f.mjs.map
