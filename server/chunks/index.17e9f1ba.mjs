import { _ as _export_sfc } from './server.mjs';
import { useSSRContext, withAsyncContext, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, renderSlot } from 'vue';
import { u as useFetch } from './fetch.92e36308.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main$7 = {
  props: ["href", "img"]
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ style: { "z-level": "3" } }, _attrs))} data-v-fa6de94e><a${ssrRenderAttr("href", $props.href)} data-v-fa6de94e><img class="spinning" width="175px"${ssrRenderAttr("src", $props.img)} data-v-fa6de94e></a></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainPage/scrolldown.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ScrolldownVue = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-fa6de94e"]]);
const _sfc_main$6 = {
  props: ["type", "title", "detail", "bigimage", "reverse"],
  components: {},
  data: () => ({
    isUserScrolling: false,
    scrollOld: 0,
    scrollNow: 0
  }),
  computed: {
    delta() {
      return this.scrollOld - this.scrollNow;
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_parallax = resolveComponent("v-parallax");
  _push(ssrRenderComponent(_component_v_container, mergeProps({
    style: { "padding": "0" },
    class: "fill-height",
    fluid: ""
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, {
          class: "",
          "no-gutters": ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "6",
                xs: "12",
                order: $props.reverse ? 2 : 1
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_container, {
                      class: "fill-height ma-15 pa-15",
                      style: { "vertical-align": "middle", "margin": "auto" }
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_row, { class: "pb-5" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_col, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_container, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_row, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(ssrRenderComponent(_component_v_col, null, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(`<h5 data-v-98c37de3${_scopeId9}>${ssrInterpolate($props.type)}</h5>`);
                                                      } else {
                                                        return [
                                                          createVNode("h5", null, toDisplayString($props.type), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode("h5", null, toDisplayString($props.type), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                            _push8(ssrRenderComponent(_component_v_row, { class: "pb-5" }, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(ssrRenderComponent(_component_v_col, null, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(`<h2 data-v-98c37de3${_scopeId9}>${ssrInterpolate($props.title)}</h2>`);
                                                      } else {
                                                        return [
                                                          createVNode("h2", null, toDisplayString($props.title), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode("h2", null, toDisplayString($props.title), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                            _push8(ssrRenderComponent(_component_v_row, { class: "pb-5" }, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(ssrRenderComponent(_component_v_col, null, {
                                                    default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                      if (_push10) {
                                                        _push10(`<p data-v-98c37de3${_scopeId9}>${ssrInterpolate($props.detail)}</p>`);
                                                      } else {
                                                        return [
                                                          createVNode("p", null, toDisplayString($props.detail), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent9, _scopeId8));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_col, null, {
                                                      default: withCtx(() => [
                                                        createVNode("p", null, toDisplayString($props.detail), 1)
                                                      ]),
                                                      _: 1
                                                    })
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                            _push8(ssrRenderComponent(_component_v_row, {
                                              justify: "start",
                                              class: "pb-5"
                                            }, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push9, _parent9, _scopeId8);
                                                } else {
                                                  return [
                                                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                                                  ];
                                                }
                                              }),
                                              _: 3
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_row, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode("h5", null, toDisplayString($props.type), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_row, { class: "pb-5" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode("h2", null, toDisplayString($props.title), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_row, { class: "pb-5" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_col, null, {
                                                    default: withCtx(() => [
                                                      createVNode("p", null, toDisplayString($props.detail), 1)
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_v_row, {
                                                justify: "start",
                                                class: "pb-5"
                                              }, {
                                                default: withCtx(() => [
                                                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                                                ]),
                                                _: 3
                                              })
                                            ];
                                          }
                                        }),
                                        _: 3
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_container, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_row, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode("h5", null, toDisplayString($props.type), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_row, { class: "pb-5" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode("h2", null, toDisplayString($props.title), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_row, { class: "pb-5" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_col, null, {
                                                  default: withCtx(() => [
                                                    createVNode("p", null, toDisplayString($props.detail), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_row, {
                                              justify: "start",
                                              class: "pb-5"
                                            }, {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, "default", {}, void 0, true)
                                              ]),
                                              _: 3
                                            })
                                          ]),
                                          _: 3
                                        })
                                      ];
                                    }
                                  }),
                                  _: 3
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_col, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_container, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_row, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode("h5", null, toDisplayString($props.type), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_row, { class: "pb-5" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode("h2", null, toDisplayString($props.title), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_row, { class: "pb-5" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_col, null, {
                                                default: withCtx(() => [
                                                  createVNode("p", null, toDisplayString($props.detail), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_row, {
                                            justify: "start",
                                            class: "pb-5"
                                          }, {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, "default", {}, void 0, true)
                                            ]),
                                            _: 3
                                          })
                                        ]),
                                        _: 3
                                      })
                                    ]),
                                    _: 3
                                  })
                                ];
                              }
                            }),
                            _: 3
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_row, { class: "pb-5" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_container, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_row, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode("h5", null, toDisplayString($props.type), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_row, { class: "pb-5" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode("h2", null, toDisplayString($props.title), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_row, { class: "pb-5" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_col, null, {
                                              default: withCtx(() => [
                                                createVNode("p", null, toDisplayString($props.detail), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_row, {
                                          justify: "start",
                                          class: "pb-5"
                                        }, {
                                          default: withCtx(() => [
                                            renderSlot(_ctx.$slots, "default", {}, void 0, true)
                                          ]),
                                          _: 3
                                        })
                                      ]),
                                      _: 3
                                    })
                                  ]),
                                  _: 3
                                })
                              ]),
                              _: 3
                            })
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_container, {
                        class: "fill-height ma-15 pa-15",
                        style: { "vertical-align": "middle", "margin": "auto" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, { class: "pb-5" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_container, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_row, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode("h5", null, toDisplayString($props.type), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_row, { class: "pb-5" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode("h2", null, toDisplayString($props.title), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_row, { class: "pb-5" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_col, null, {
                                            default: withCtx(() => [
                                              createVNode("p", null, toDisplayString($props.detail), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_row, {
                                        justify: "start",
                                        class: "pb-5"
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "default", {}, void 0, true)
                                        ]),
                                        _: 3
                                      })
                                    ]),
                                    _: 3
                                  })
                                ]),
                                _: 3
                              })
                            ]),
                            _: 3
                          })
                        ]),
                        _: 3
                      })
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "6",
                xs: "12",
                order: $props.reverse ? 1 : 2
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_parallax, {
                      class: "outer-image",
                      src: $props.bigimage
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_parallax, {
                        class: "outer-image",
                        src: $props.bigimage
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  cols: "6",
                  xs: "12",
                  order: $props.reverse ? 2 : 1
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_container, {
                      class: "fill-height ma-15 pa-15",
                      style: { "vertical-align": "middle", "margin": "auto" }
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, { class: "pb-5" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_container, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_row, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            createVNode("h5", null, toDisplayString($props.type), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_row, { class: "pb-5" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            createVNode("h2", null, toDisplayString($props.title), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_row, { class: "pb-5" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_col, null, {
                                          default: withCtx(() => [
                                            createVNode("p", null, toDisplayString($props.detail), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_row, {
                                      justify: "start",
                                      class: "pb-5"
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "default", {}, void 0, true)
                                      ]),
                                      _: 3
                                    })
                                  ]),
                                  _: 3
                                })
                              ]),
                              _: 3
                            })
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }, 8, ["order"]),
                createVNode(_component_v_col, {
                  cols: "6",
                  xs: "12",
                  order: $props.reverse ? 1 : 2
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_parallax, {
                      class: "outer-image",
                      src: $props.bigimage
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                }, 8, ["order"])
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, {
            class: "",
            "no-gutters": ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                cols: "6",
                xs: "12",
                order: $props.reverse ? 2 : 1
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_container, {
                    class: "fill-height ma-15 pa-15",
                    style: { "vertical-align": "middle", "margin": "auto" }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, { class: "pb-5" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_container, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          createVNode("h5", null, toDisplayString($props.type), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_row, { class: "pb-5" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          createVNode("h2", null, toDisplayString($props.title), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_row, { class: "pb-5" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, null, {
                                        default: withCtx(() => [
                                          createVNode("p", null, toDisplayString($props.detail), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_row, {
                                    justify: "start",
                                    class: "pb-5"
                                  }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                                    ]),
                                    _: 3
                                  })
                                ]),
                                _: 3
                              })
                            ]),
                            _: 3
                          })
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              }, 8, ["order"]),
              createVNode(_component_v_col, {
                cols: "6",
                xs: "12",
                order: $props.reverse ? 1 : 2
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_parallax, {
                    class: "outer-image",
                    src: $props.bigimage
                  }, null, 8, ["src"])
                ]),
                _: 1
              }, 8, ["order"])
            ]),
            _: 3
          })
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainPage/DataImageSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const DataImageSectionVue = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-98c37de3"]]);
const _sfc_main$5 = {
  props: ["item"],
  computed: {
    src() {
      return this.item.src;
    },
    title() {
      return this.item.title;
    },
    description() {
      return this.item.description;
    },
    alt() {
      return this.item.alt;
    }
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SampleCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$3 = {
  props: {
    text: {
      type: String,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    marqueeClasses() {
      return { "marquee--reverse": this.reverse };
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "enable-animation" }, _attrs))} data-v-f390052d><div class="${ssrRenderClass([$options.marqueeClasses, "marquee"])}" data-v-f390052d><ul class="marquee__content" data-v-f390052d><!--[-->`);
  ssrRenderList(15, (i) => {
    _push(`<li class="stylish-marquee" data-v-f390052d>${ssrInterpolate($props.text)}\xA0</li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RunningText.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const RunningTextVue = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-f390052d"]]);
const _sfc_main$2 = {
  props: [
    "backtext",
    "fronttext",
    "imgsrc",
    "alt"
  ],
  components: {
    RunningTextVue
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_img = resolveComponent("v-img");
  const _component_RunningTextVue = resolveComponent("RunningTextVue");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "middle" }, _attrs))} data-v-ac4495bf>`);
  _push(ssrRenderComponent(_component_v_img, {
    style: { "max-height": "100vh", "position": "relative" },
    src: $props.imgsrc,
    cover: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "width": "100%", "height": "100%", "display": "flex" })}" data-v-ac4495bf${_scopeId}><div class="center" data-v-ac4495bf${_scopeId}>`);
        _push2(ssrRenderComponent(_component_RunningTextVue, {
          class: "front",
          text: $props.fronttext
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_RunningTextVue, {
          class: "back",
          text: $props.backtext,
          reverse: true
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { style: { "width": "100%", "height": "100%", "display": "flex" } }, [
            createVNode("div", { class: "center" }, [
              createVNode(_component_RunningTextVue, {
                class: "front",
                text: $props.fronttext
              }, null, 8, ["text"]),
              createVNode(_component_RunningTextVue, {
                class: "back",
                text: $props.backtext,
                reverse: true
              }, null, 8, ["text"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainPage/PicAndText.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PicAndTextVue = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ac4495bf"]]);
const _sfc_main$1 = {
  props: [
    "imgs"
  ]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h2${ssrRenderAttrs(_attrs)}>We&#39;re <span><img class="text-img"${ssrRenderAttr("src", $props.imgs[0])}></span> changing the way <b><u>sport equipment</u></b> is <span><img class="text-img"${ssrRenderAttr("src", $props.imgs[1])}></span> built for clients by utilizing Virtual Reality <span><img class="text-img"${ssrRenderAttr("src", $props.imgs[2])}></span> to provide <span><img class="text-img"${ssrRenderAttr("src", $props.imgs[3])}></span> immersive previews <b><u>during our build process.</u></b></h2>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainPage/Quote.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const QuoteVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    [__temp, __restore] = withAsyncContext(() => useFetch("/api/products", "$wwVYWyoTZd")), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_parallax = resolveComponent("v-parallax");
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        style: { "padding": "0" },
        class: "fill-height row-holder",
        fluid: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, {
              name: "bg-black",
              class: "content-row",
              "no-gutters": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_sheet, { style: { "background-color": "#000000" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h1 style="${ssrRenderStyle({ "color": "white" })}" data-v-82ca2e4c${_scopeId4}>${ssrInterpolate(_ctx.locale)}</h1>`);
                            } else {
                              return [
                                createVNode("h1", { style: { "color": "white" } }, toDisplayString(_ctx.locale), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_sheet, { style: { "background-color": "#000000" } }, {
                            default: withCtx(() => [
                              createVNode("h1", { style: { "color": "white" } }, toDisplayString(_ctx.locale), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_sheet, { style: { "background-color": "#000000" } }, {
                          default: withCtx(() => [
                            createVNode("h1", { style: { "color": "white" } }, toDisplayString(_ctx.locale), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              name: "bg-black",
              class: "content-row",
              "no-gutters": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_sheet, { style: { "background-color": "#000000" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<h1 style="${ssrRenderStyle({ "color": "white" })}" data-v-82ca2e4c${_scopeId4}>${ssrInterpolate(_ctx.$t("text"))}</h1>`);
                            } else {
                              return [
                                createVNode("h1", { style: { "color": "white" } }, toDisplayString(_ctx.$t("text")), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_sheet, { style: { "background-color": "#000000" } }, {
                            default: withCtx(() => [
                              createVNode("h1", { style: { "color": "white" } }, toDisplayString(_ctx.$t("text")), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_sheet, { style: { "background-color": "#000000" } }, {
                          default: withCtx(() => [
                            createVNode("h1", { style: { "color": "white" } }, toDisplayString(_ctx.$t("text")), 1)
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              name: "bg-black",
              class: "content-row",
              "no-gutters": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_sheet, { style: { "background-color": "#000000" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_img, {
                                style: { "max-height": "100vh", "position": "relative" },
                                class: "img-opacity",
                                src: "img/BG1-scaled.jpg",
                                cover: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div style="${ssrRenderStyle({ "width": "100%", "height": "100%", "display": "flex" })}" data-v-82ca2e4c${_scopeId5}><div class="scroll-down-holder center" data-v-82ca2e4c${_scopeId5}>`);
                                    _push6(ssrRenderComponent(ScrolldownVue, {
                                      img: "img/red-scroll-down.png",
                                      class: "scroll-down",
                                      href: "#intro"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { style: { "width": "100%", "height": "100%", "display": "flex" } }, [
                                        createVNode("div", { class: "scroll-down-holder center" }, [
                                          createVNode(ScrolldownVue, {
                                            img: "img/red-scroll-down.png",
                                            class: "scroll-down",
                                            href: "#intro"
                                          }, null, 8, ["img"])
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_img, {
                                  style: { "max-height": "100vh", "position": "relative" },
                                  class: "img-opacity",
                                  src: "img/BG1-scaled.jpg",
                                  cover: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { style: { "width": "100%", "height": "100%", "display": "flex" } }, [
                                      createVNode("div", { class: "scroll-down-holder center" }, [
                                        createVNode(ScrolldownVue, {
                                          img: "img/red-scroll-down.png",
                                          class: "scroll-down",
                                          href: "#intro"
                                        }, null, 8, ["img"])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_sheet, { style: { "background-color": "#000000" } }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                style: { "max-height": "100vh", "position": "relative" },
                                class: "img-opacity",
                                src: "img/BG1-scaled.jpg",
                                cover: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { style: { "width": "100%", "height": "100%", "display": "flex" } }, [
                                    createVNode("div", { class: "scroll-down-holder center" }, [
                                      createVNode(ScrolldownVue, {
                                        img: "img/red-scroll-down.png",
                                        class: "scroll-down",
                                        href: "#intro"
                                      }, null, 8, ["img"])
                                    ])
                                  ])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_sheet, { style: { "background-color": "#000000" } }, {
                          default: withCtx(() => [
                            createVNode(_component_v_img, {
                              style: { "max-height": "100vh", "position": "relative" },
                              class: "img-opacity",
                              src: "img/BG1-scaled.jpg",
                              cover: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { style: { "width": "100%", "height": "100%", "display": "flex" } }, [
                                  createVNode("div", { class: "scroll-down-holder center" }, [
                                    createVNode(ScrolldownVue, {
                                      img: "img/red-scroll-down.png",
                                      class: "scroll-down",
                                      href: "#intro"
                                    }, null, 8, ["img"])
                                  ])
                                ])
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              id: "intro",
              name: "bg-white",
              class: "content-row",
              "no-gutters": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(DataImageSectionVue, {
                          type: "Residental",
                          title: "Iconic architecture expertly developed",
                          bigimage: "img/Block2BG.jpg",
                          detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla est sapien, nec semper neque auctor nec. Duis vehicula quis mi at vehicula. Vivamus at."
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div data-v-82ca2e4c${_scopeId5}><h2 data-v-82ca2e4c${_scopeId5}>30+</h2><p data-v-82ca2e4c${_scopeId5}>Years of experience</p></div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, [
                                        createVNode("h2", null, "30+"),
                                        createVNode("p", null, "Years of experience")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div data-v-82ca2e4c${_scopeId5}><h2 data-v-82ca2e4c${_scopeId5}>10x</h2><p data-v-82ca2e4c${_scopeId5}>Builder of the year</p></div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, [
                                        createVNode("h2", null, "10x"),
                                        createVNode("p", null, "Builder of the year")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, null, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("h2", null, "30+"),
                                      createVNode("p", null, "Years of experience")
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, null, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      createVNode("h2", null, "10x"),
                                      createVNode("p", null, "Builder of the year")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(DataImageSectionVue, {
                            type: "Residental",
                            title: "Iconic architecture expertly developed",
                            bigimage: "img/Block2BG.jpg",
                            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla est sapien, nec semper neque auctor nec. Duis vehicula quis mi at vehicula. Vivamus at."
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, null, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("h2", null, "30+"),
                                    createVNode("p", null, "Years of experience")
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, null, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("h2", null, "10x"),
                                    createVNode("p", null, "Builder of the year")
                                  ])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(DataImageSectionVue, {
                          type: "Residental",
                          title: "Iconic architecture expertly developed",
                          bigimage: "img/Block2BG.jpg",
                          detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla est sapien, nec semper neque auctor nec. Duis vehicula quis mi at vehicula. Vivamus at."
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, null, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("h2", null, "30+"),
                                  createVNode("p", null, "Years of experience")
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, null, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  createVNode("h2", null, "10x"),
                                  createVNode("p", null, "Builder of the year")
                                ])
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              name: "bg-white",
              class: "content-row",
              "no-gutters": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(RunningTextVue, { text: "StreetBarbell" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(RunningTextVue, { text: "StreetBarbell" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(RunningTextVue, { text: "StreetBarbell" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              name: "bg-white",
              class: "content-row",
              "no-gutters": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(DataImageSectionVue, {
                          type: "Residental",
                          title: "Iconic architecture expertly developed",
                          reverse: "true",
                          bigimage: "img/Block3BG.jpg",
                          detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla est sapien, nec semper neque auctor nec. Duis vehicula quis mi at vehicula. Vivamus at."
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_col, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_chip, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Award winning`);
                                        } else {
                                          return [
                                            createTextVNode("Award winning")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_chip, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Award winning")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_chip, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Established team`);
                                        } else {
                                          return [
                                            createTextVNode("Established team")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_chip, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Established team")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_col, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_chip, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Contact Us`);
                                        } else {
                                          return [
                                            createTextVNode("Contact Us")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_chip, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Contact Us")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_col, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_chip, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Award winning")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_chip, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Established team")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_chip, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Contact Us")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(DataImageSectionVue, {
                            type: "Residental",
                            title: "Iconic architecture expertly developed",
                            reverse: "true",
                            bigimage: "img/Block3BG.jpg",
                            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla est sapien, nec semper neque auctor nec. Duis vehicula quis mi at vehicula. Vivamus at."
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_chip, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Award winning")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_chip, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Established team")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_col, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_chip, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Contact Us")
                                    ]),
                                    _: 1
                                  })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(DataImageSectionVue, {
                          type: "Residental",
                          title: "Iconic architecture expertly developed",
                          reverse: "true",
                          bigimage: "img/Block3BG.jpg",
                          detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla est sapien, nec semper neque auctor nec. Duis vehicula quis mi at vehicula. Vivamus at."
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_chip, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Award winning")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_chip, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Established team")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_chip, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Contact Us")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              name: "bg-white",
              class: "content-row",
              "no-gutters": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(RunningTextVue, { text: "Outdoor Gym" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(RunningTextVue, { text: "Outdoor Gym" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(RunningTextVue, { text: "Outdoor Gym" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              name: "bg-white",
              class: "content-row",
              "no-gutters": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_container, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_row, { justify: "center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_col, {
                                      cols: "12",
                                      xl: "5",
                                      lg: "7",
                                      md: "8",
                                      sm: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(QuoteVue, { imgs: ["img/sergei-sushchik-DQpUeNzRj6s-unsplash-140x140.jpg", "img/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash-140x140.jpg", "img/kristijan-arsov-N90Bi6j-Ax8-unsplash-2-140x140.jpg", "img/norman-brown-FVaimgno3dw-unsplash-140x140.jpg"] }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(QuoteVue, { imgs: ["img/sergei-sushchik-DQpUeNzRj6s-unsplash-140x140.jpg", "img/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash-140x140.jpg", "img/kristijan-arsov-N90Bi6j-Ax8-unsplash-2-140x140.jpg", "img/norman-brown-FVaimgno3dw-unsplash-140x140.jpg"] }, null, 8, ["imgs"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_col, {
                                        cols: "12",
                                        xl: "5",
                                        lg: "7",
                                        md: "8",
                                        sm: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(QuoteVue, { imgs: ["img/sergei-sushchik-DQpUeNzRj6s-unsplash-140x140.jpg", "img/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash-140x140.jpg", "img/kristijan-arsov-N90Bi6j-Ax8-unsplash-2-140x140.jpg", "img/norman-brown-FVaimgno3dw-unsplash-140x140.jpg"] }, null, 8, ["imgs"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_row, { justify: "center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, {
                                      cols: "12",
                                      xl: "5",
                                      lg: "7",
                                      md: "8",
                                      sm: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(QuoteVue, { imgs: ["img/sergei-sushchik-DQpUeNzRj6s-unsplash-140x140.jpg", "img/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash-140x140.jpg", "img/kristijan-arsov-N90Bi6j-Ax8-unsplash-2-140x140.jpg", "img/norman-brown-FVaimgno3dw-unsplash-140x140.jpg"] }, null, 8, ["imgs"])
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_container, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, { justify: "center" }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, {
                                    cols: "12",
                                    xl: "5",
                                    lg: "7",
                                    md: "8",
                                    sm: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QuoteVue, { imgs: ["img/sergei-sushchik-DQpUeNzRj6s-unsplash-140x140.jpg", "img/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash-140x140.jpg", "img/kristijan-arsov-N90Bi6j-Ax8-unsplash-2-140x140.jpg", "img/norman-brown-FVaimgno3dw-unsplash-140x140.jpg"] }, null, 8, ["imgs"])
                                    ]),
                                    _: 1
                                  })
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_container, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, { justify: "center" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, {
                                  cols: "12",
                                  xl: "5",
                                  lg: "7",
                                  md: "8",
                                  sm: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QuoteVue, { imgs: ["img/sergei-sushchik-DQpUeNzRj6s-unsplash-140x140.jpg", "img/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash-140x140.jpg", "img/kristijan-arsov-N90Bi6j-Ax8-unsplash-2-140x140.jpg", "img/norman-brown-FVaimgno3dw-unsplash-140x140.jpg"] }, null, 8, ["imgs"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              name: "bg-black",
              class: "content-row",
              "no-gutters": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_parallax, { src: "img/Block6BG-scaled.jpg" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_parallax, { src: "img/Block6BG-scaled.jpg" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_parallax, { src: "img/Block6BG-scaled.jpg" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, {
              name: "bg-black",
              style: { "background-image": "linear-gradient(183deg, rgb(158,190,231) 5%, rgb(220,240,255) 90%)" },
              class: "content-row",
              "no-gutters": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(PicAndTextVue, {
                          backtext: "fitness equipment",
                          fronttext: "street barbell",
                          imgsrc: "img/Pair_of_dumbbells.png"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(PicAndTextVue, {
                            backtext: "fitness equipment",
                            fronttext: "street barbell",
                            imgsrc: "img/Pair_of_dumbbells.png"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(PicAndTextVue, {
                          backtext: "fitness equipment",
                          fronttext: "street barbell",
                          imgsrc: "img/Pair_of_dumbbells.png"
                        })
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
              createVNode(_component_v_row, {
                name: "bg-black",
                class: "content-row",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_sheet, { style: { "background-color": "#000000" } }, {
                        default: withCtx(() => [
                          createVNode("h1", { style: { "color": "white" } }, toDisplayString(_ctx.locale), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, {
                name: "bg-black",
                class: "content-row",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_sheet, { style: { "background-color": "#000000" } }, {
                        default: withCtx(() => [
                          createVNode("h1", { style: { "color": "white" } }, toDisplayString(_ctx.$t("text")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, {
                name: "bg-black",
                class: "content-row",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_sheet, { style: { "background-color": "#000000" } }, {
                        default: withCtx(() => [
                          createVNode(_component_v_img, {
                            style: { "max-height": "100vh", "position": "relative" },
                            class: "img-opacity",
                            src: "img/BG1-scaled.jpg",
                            cover: ""
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { style: { "width": "100%", "height": "100%", "display": "flex" } }, [
                                createVNode("div", { class: "scroll-down-holder center" }, [
                                  createVNode(ScrolldownVue, {
                                    img: "img/red-scroll-down.png",
                                    class: "scroll-down",
                                    href: "#intro"
                                  }, null, 8, ["img"])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, {
                id: "intro",
                name: "bg-white",
                class: "content-row",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(DataImageSectionVue, {
                        type: "Residental",
                        title: "Iconic architecture expertly developed",
                        bigimage: "img/Block2BG.jpg",
                        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla est sapien, nec semper neque auctor nec. Duis vehicula quis mi at vehicula. Vivamus at."
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("h2", null, "30+"),
                                createVNode("p", null, "Years of experience")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, null, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("h2", null, "10x"),
                                createVNode("p", null, "Builder of the year")
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, {
                name: "bg-white",
                class: "content-row",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(RunningTextVue, { text: "StreetBarbell" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, {
                name: "bg-white",
                class: "content-row",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(DataImageSectionVue, {
                        type: "Residental",
                        title: "Iconic architecture expertly developed",
                        reverse: "true",
                        bigimage: "img/Block3BG.jpg",
                        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla est sapien, nec semper neque auctor nec. Duis vehicula quis mi at vehicula. Vivamus at."
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_chip, null, {
                                default: withCtx(() => [
                                  createTextVNode("Award winning")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_chip, null, {
                                default: withCtx(() => [
                                  createTextVNode("Established team")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_chip, null, {
                                default: withCtx(() => [
                                  createTextVNode("Contact Us")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, {
                name: "bg-white",
                class: "content-row",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(RunningTextVue, { text: "Outdoor Gym" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, {
                name: "bg-white",
                class: "content-row",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_container, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_row, { justify: "center" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_col, {
                                cols: "12",
                                xl: "5",
                                lg: "7",
                                md: "8",
                                sm: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(QuoteVue, { imgs: ["img/sergei-sushchik-DQpUeNzRj6s-unsplash-140x140.jpg", "img/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash-140x140.jpg", "img/kristijan-arsov-N90Bi6j-Ax8-unsplash-2-140x140.jpg", "img/norman-brown-FVaimgno3dw-unsplash-140x140.jpg"] }, null, 8, ["imgs"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, {
                name: "bg-black",
                class: "content-row",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_parallax, { src: "img/Block6BG-scaled.jpg" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_row, {
                name: "bg-black",
                style: { "background-image": "linear-gradient(183deg, rgb(158,190,231) 5%, rgb(220,240,255) 90%)" },
                class: "content-row",
                "no-gutters": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      createVNode(PicAndTextVue, {
                        backtext: "fitness equipment",
                        fronttext: "street barbell",
                        imgsrc: "img/Pair_of_dumbbells.png"
                      })
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-82ca2e4c"]]);

export { index as default };
//# sourceMappingURL=index.17e9f1ba.mjs.map
