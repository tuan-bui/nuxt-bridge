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

var Melon$1 = {};

var ids = Melon$1.ids = [4];
var modules = Melon$1.modules = {
  68: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", {
        staticStyle: {
          "height": "500px",
          "background-color": "yellow"
        }
      }, [_vm._ssrNode("<p>Melon</p>")]);
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
      "5fa33df7"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const Melon = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': Melon$1
}, [Melon$1]);

export { Melon as M };
//# sourceMappingURL=Melon.mjs.map
