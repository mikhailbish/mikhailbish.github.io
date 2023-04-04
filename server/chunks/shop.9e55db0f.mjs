import { _ as _export_sfc, b as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, resolveComponent, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import __nuxt_component_1 from './Modal.aac52a0f.mjs';
import { _ as __nuxt_component_2 } from './DetailView.f95420a1.mjs';
import { u as useFetch } from './fetch.92e36308.mjs';
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
import './SmallCircleButton.9b85c2c4.mjs';

const _sfc_main$1 = {
  props: ["item"],
  data: () => ({
    id: "",
    name: "",
    price: "",
    img: "",
    hovered: false
  }),
  created() {
    this.name = this.item.name;
    this.price = this.item.price;
    this.img = this.item.img;
    this.id = this.item.id;
  },
  methods: {
    itemSelected() {
      console.log("clicked");
      this.$emit("itemSelected", this.id);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "shop-item-outer" }, _attrs))} data-v-e279f0b9><div class="shop-item-inner" data-v-e279f0b9>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: `/items/${_ctx.id}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="shop-item-image"${ssrRenderAttr("src", _ctx.img)} alt="" data-v-e279f0b9${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "shop-item-image",
            src: _ctx.img,
            alt: ""
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="shop-item-details" data-v-e279f0b9><h2 data-v-e279f0b9>${ssrInterpolate(_ctx.name)}</h2>`);
  if (!_ctx.hovered) {
    _push(`<span data-v-e279f0b9>${ssrInterpolate(_ctx.price)} \u20AC</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.hovered) {
    _push(`<div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between" })}" data-v-e279f0b9>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "hover-underline",
      to: `/items/${_ctx.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-bag-shopping" }, null, _parent2, _scopeId));
          _push2(` Add to cart`);
        } else {
          return [
            createVNode(_component_font_awesome_icon, { icon: "fa-solid fa-bag-shopping" }),
            createTextVNode(" Add to cart")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<div data-v-e279f0b9><div class="hover-underline" data-v-e279f0b9>`);
    _push(ssrRenderComponent(_component_font_awesome_icon, { icon: "fa-solid fa-eye" }, null, _parent));
    _push(` Quick view</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shopItemCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e279f0b9"]]);
const _sfc_main = {
  async setup() {
    try {
      const { data } = await useFetch("/api/products", "$fwbSOpZK2m");
      console.log("data in shop", data);
      return { someItems: data.value };
    } catch (err) {
      console.log("Failed to get items");
      console.log("Error:", err);
    }
  },
  data: () => ({
    items: [],
    title: "The Shop",
    selected: false,
    subtitle: "Best training equipment",
    selectedItem: null
  }),
  methods: {
    openModal(payload) {
      console.log("in open modal");
      this.selectedItem = this.someItems.find((item) => {
        if (item.id === payload)
          return item;
      });
      this.selected = true;
    },
    modalClosed() {
      this.selectedItem = null;
    }
  },
  components: {
    "shop-item-card": __nuxt_component_0,
    "page-title": PageTitleVue,
    "Detail-view": __nuxt_component_2
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_shop_item_card = __nuxt_component_0;
  const _component_Modal = __nuxt_component_1;
  const _component_Detail_view = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "width": "100%" } }, _attrs))} data-v-844cb8b7><ul class="flex-container" data-v-844cb8b7><!--[-->`);
  ssrRenderList(_ctx.someItems, (item, id) => {
    _push(`<li data-v-844cb8b7>`);
    _push(ssrRenderComponent(_component_shop_item_card, {
      onItemSelected: $options.openModal,
      item
    }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
  _push(ssrRenderComponent(_component_Modal, {
    onModalClosed: $options.modalClosed,
    open: _ctx.selected,
    onClose: ($event) => _ctx.selected = false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Detail_view, { details: _ctx.selectedItem }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Detail_view, { details: _ctx.selectedItem }, null, 8, ["details"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shop = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-844cb8b7"]]);

export { shop as default };
//# sourceMappingURL=shop.9e55db0f.mjs.map
