import __nuxt_component_0$1 from './SmallCircleButton.9b85c2c4.mjs';
import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {
  data: () => ({
    counter: 0
  }),
  methods: {
    counterUp() {
      this.counter++;
      this.announce();
    },
    counterDown() {
      if (this.counter > 0) {
        this.counter--;
      }
      this.announce();
    },
    announce() {
      this.$emit("item-counter-change", this.counter);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Small_circle_button = __nuxt_component_0$1;
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "holder" }, _attrs))} data-v-8d70e0a4>`);
  _push(ssrRenderComponent(_component_Small_circle_button, {
    class: "counter-btn",
    onClick: $options.counterDown
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-minus" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-minus" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="quantity" data-v-8d70e0a4>${ssrInterpolate(_ctx.counter)}</span>`);
  _push(ssrRenderComponent(_component_Small_circle_button, {
    class: "counter-btn",
    onClick: $options.counterUp
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-plus" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-plus" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AmountCounter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8d70e0a4"]]);
const _sfc_main = {
  props: ["details"],
  computed: {
    name() {
      return this.details.name;
    },
    description() {
      return this.details.description;
    },
    price() {
      return this.details.price;
    }
  },
  methods: {
    counterChange(payload) {
      console.log(payload);
    }
  },
  components: {
    "amount-counter": __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_amount_counter = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "display": "flex", "height": "100%" } }, _attrs))} data-v-2b9da148><div class="image-holder" data-v-2b9da148><img class="sample-image"${ssrRenderAttr("src", $props.details.img)} alt="" data-v-2b9da148></div><div class="vl" data-v-2b9da148></div><div class="info-holder" data-v-2b9da148><h1 data-v-2b9da148>${ssrInterpolate($options.name)}</h1><span data-v-2b9da148>${ssrInterpolate($options.price)} \u20AC</span><p data-v-2b9da148>${ssrInterpolate($options.description)}</p><div class="action-container" data-v-2b9da148>`);
  _push(ssrRenderComponent(_component_amount_counter, {
    style: { "width": "30%" },
    onItemCounterChange: $options.counterChange
  }, null, _parent));
  _push(`<button data-v-2b9da148>Add to Cart</button><button data-v-2b9da148>More information</button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DetailView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2b9da148"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=DetailView.f95420a1.mjs.map
