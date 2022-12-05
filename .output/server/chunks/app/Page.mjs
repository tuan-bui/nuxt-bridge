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

var Page$1 = {};

var ids = Page$1.ids = [5];
var modules = Page$1.modules = {
  64: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", {
        staticClass: "main"
      }, [_vm._t("default")], 2);
    };
    var staticRenderFns = [];
    var componentNormalizer = __webpack_require__(3);
    var script = {};
    var component = Object(componentNormalizer["a"])(
      script,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "5def31fb"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const Page = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': Page$1
}, [Page$1]);

export { Page as P };
//# sourceMappingURL=Page.mjs.map
