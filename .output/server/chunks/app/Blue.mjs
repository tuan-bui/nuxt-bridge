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

var Blue$1 = {};

var ids = Blue$1.ids = [1];
var modules = Blue$1.modules = {
  67: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", {
        staticStyle: {
          "height": "500px",
          "background-color": "blue"
        }
      }, [_vm._ssrNode("<p>Blue</p>")]);
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
      "0d672246"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const Blue = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': Blue$1
}, [Blue$1]);

export { Blue as B };
//# sourceMappingURL=Blue.mjs.map
