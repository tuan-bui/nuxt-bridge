function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var about$1 = {};

var ids = about$1.ids = [8];
var modules = about$1.modules = {
  59: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
      return _c("Page", [_c("button", {
        on: {
          "click": _vm.show
        }
      }, [_vm._v("Show")]), _vm._v(" "), _c("Cherry"), _vm._v(" "), _c("Blue"), _vm._v(" "), _c("Apple"), _vm._v(" "), _c("Apple"), _vm._v(" "), _c("Apple"), _vm._v(" "), _vm.isDisplaying ? _c("Melon") : _vm._e(), _vm._v(" "), _c("LazyHydrate", {
        attrs: {
          "never": ""
        }
      }, [_c("Grey")], 1)], 1);
    };
    var staticRenderFns = [];
    var vue_runtime = __webpack_require__(0);
    __webpack_require__(46);
    __webpack_require__(47);
    __webpack_require__(48);
    __webpack_require__(49);
    __webpack_require__(50);
    __webpack_require__(51);
    __webpack_require__(52);
    __webpack_require__(53);
    __webpack_require__(54);
    __webpack_require__(55);
    __webpack_require__(56);
    __webpack_require__(57);
    __webpack_require__(58);
    var observers = /* @__PURE__ */ new Map();
    function makeHydrationObserver(options) {
      if (typeof IntersectionObserver === "undefined")
        return null;
      var optionKey = JSON.stringify(options);
      if (observers.has(optionKey))
        return observers.get(optionKey);
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          var isIntersecting = entry.isIntersecting || entry.intersectionRatio > 0;
          if (!isIntersecting || !entry.target.hydrate)
            return;
          entry.target.hydrate();
        });
      }, options);
      observers.set(optionKey, observer);
      return observer;
    }
    function makeHydrationPromise() {
      var hydrate = function hydrate2() {
      };
      var hydrationPromise = new Promise(function(resolve) {
        hydrate = resolve;
      });
      return {
        hydrate,
        hydrationPromise
      };
    }
    function makeNonce(_ref) {
      var component2 = _ref.component; _ref.hydrationPromise;
      return component2;
    }
    function makeHydrationBlocker(component2, options) {
      return Object.assign({
        mixins: [{
          beforeCreate: function beforeCreate() {
            this.cleanupHandlers = [];
            var _makeHydrationPromise = makeHydrationPromise(), hydrate = _makeHydrationPromise.hydrate, hydrationPromise = _makeHydrationPromise.hydrationPromise;
            this.Nonce = makeNonce({
              component: component2,
              hydrationPromise
            });
            this.hydrate = hydrate;
            this.hydrationPromise = hydrationPromise;
          },
          beforeDestroy: function beforeDestroy() {
            this.cleanup();
          },
          mounted: function mounted() {
            var _this = this;
            if (this.$el.nodeType === Node.COMMENT_NODE) {
              this.hydrate();
              return;
            }
            if (this.never)
              return;
            if (this.whenVisible) {
              var observerOptions = this.whenVisible !== true ? this.whenVisible : void 0;
              var observer = makeHydrationObserver(observerOptions);
              if (!observer) {
                this.hydrate();
                return;
              }
              this.$el.hydrate = this.hydrate;
              var cleanup = function cleanup2() {
                return observer.unobserve(_this.$el);
              };
              this.cleanupHandlers.push(cleanup);
              this.hydrationPromise.then(cleanup);
              observer.observe(this.$el);
              return;
            }
            if (this.whenIdle) {
              if (!("requestIdleCallback" in window) || !("requestAnimationFrame" in window)) {
                this.hydrate();
                return;
              }
              var id = requestIdleCallback(function() {
                requestAnimationFrame(_this.hydrate);
              }, {
                timeout: this.idleTimeout
              });
              var _cleanup = function _cleanup2() {
                return cancelIdleCallback(id);
              };
              this.cleanupHandlers.push(_cleanup);
              this.hydrationPromise.then(_cleanup);
            }
            if (this.interactionEvents && this.interactionEvents.length) {
              var eventListenerOptions = {
                capture: true,
                once: true,
                passive: true
              };
              this.interactionEvents.forEach(function(eventName) {
                _this.$el.addEventListener(eventName, _this.hydrate, eventListenerOptions);
                var cleanup2 = function cleanup3() {
                  _this.$el.removeEventListener(eventName, _this.hydrate, eventListenerOptions);
                };
                _this.cleanupHandlers.push(cleanup2);
              });
            }
          },
          methods: {
            cleanup: function cleanup() {
              this.cleanupHandlers.forEach(function(handler) {
                return handler();
              });
            }
          },
          render: function render2(h) {
            return h(this.Nonce, {
              attrs: this.$attrs,
              on: this.$listeners,
              scopedSlots: this.$scopedSlots
            }, this.$slots.default);
          }
        }]
      }, options);
    }
    var Placeholder = {
      render: function render2() {
        return this.$slots.default;
      }
    };
    var LazyHydrate = makeHydrationBlocker(Placeholder, {
      props: {
        idleTimeout: {
          default: 2e3,
          type: Number
        },
        never: {
          type: Boolean
        },
        onInteraction: {
          type: [Array, Boolean, String]
        },
        triggerHydration: {
          default: false,
          type: Boolean
        },
        whenIdle: {
          type: Boolean
        },
        whenVisible: {
          type: [Boolean, Object]
        }
      },
      computed: {
        interactionEvents: function interactionEvents() {
          if (!this.onInteraction)
            return [];
          if (this.onInteraction === true)
            return ["focus"];
          return Array.isArray(this.onInteraction) ? this.onInteraction : [this.onInteraction];
        }
      },
      watch: {
        triggerHydration: {
          immediate: true,
          handler: function handler(isTriggered) {
            if (isTriggered)
              this.hydrate();
          }
        }
      }
    });
    var LazyHydrate_esm = LazyHydrate;
    var aboutvue_type_script_lang_js_ = vue_runtime["b"].extend({
      name: "About",
      components: {
        Page: () => __webpack_require__.e(5).then(__webpack_require__.bind(null, 64)),
        Apple: () => __webpack_require__.e(0).then(__webpack_require__.bind(null, 65)),
        Cherry: () => __webpack_require__.e(2).then(__webpack_require__.bind(null, 63)),
        Grey: () => __webpack_require__.e(3).then(__webpack_require__.bind(null, 66)),
        Blue: () => __webpack_require__.e(1).then(__webpack_require__.bind(null, 67)),
        Melon: () => __webpack_require__.e(4).then(__webpack_require__.bind(null, 68)),
        LazyHydrate: LazyHydrate_esm
      },
      asyncData() {
        return {
          component: Math.random() > 0.5 ? "Melon" : "Grey"
        };
      },
      data() {
        return {
          isDisplaying: false,
          isClient: false
        };
      },
      methods: {
        show() {
          this.isDisplaying = !this.isDisplaying;
          console.log("clicked");
        }
      }
    });
    var pages_aboutvue_type_script_lang_js_ = aboutvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(3);
    var component = Object(componentNormalizer["a"])(
      pages_aboutvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "5f449df5"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const about = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': about$1
}, [about$1]);

export { about as a };
//# sourceMappingURL=about.mjs.map
