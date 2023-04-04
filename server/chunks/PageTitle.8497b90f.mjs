import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: ["title", "subtitle"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "center hero-image" }, _attrs))} data-v-8ade0a08>`);
  ssrRenderSlot(_ctx.$slots, "nav", {}, null, _push, _parent);
  _push(`<div class="hero-text" data-v-8ade0a08><div data-v-8ade0a08><h1 data-v-8ade0a08>${ssrInterpolate($props.title)}</h1><h2 data-v-8ade0a08>${ssrInterpolate($props.subtitle)}</h2></div></div>`);
  ssrRenderSlot(_ctx.$slots, "scroll", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageTitleVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8ade0a08"]]);

export { PageTitleVue as P };
//# sourceMappingURL=PageTitle.8497b90f.mjs.map
