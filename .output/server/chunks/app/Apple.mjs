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

var Apple$1 = {};

var ids = Apple$1.ids = [0];
var modules = Apple$1.modules = {
  65: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", {
        staticClass: "pt-10",
        staticStyle: {
          "height": "500px",
          "background-color": "red"
        }
      }, [_vm._ssrNode("<p>Apple</p>")]);
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
      "9dd2f1c4"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const Apple = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': Apple$1
}, [Apple$1]);

export { Apple as A };
//# sourceMappingURL=Apple.mjs.map
