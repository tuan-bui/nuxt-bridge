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

var Grey$1 = {};

var ids = Grey$1.ids = [3];
var modules = Grey$1.modules = {
  66: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", {
        staticStyle: {
          "height": "500px",
          "background-color": "grey"
        }
      }, [_vm._ssrNode("<p>Grey</p>")]);
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
      "37feb24b"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const Grey = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': Grey$1
}, [Grey$1]);

export { Grey as G };
//# sourceMappingURL=Grey.mjs.map
