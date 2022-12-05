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

var Cherry$1 = {};

var ids = Cherry$1.ids = [2];
var modules = Cherry$1.modules = {
  63: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", {
        staticStyle: {
          "height": "500px",
          "background-color": "pink"
        }
      }, [_vm._ssrNode("<p>Cherry</p>")]);
    };
    var staticRenderFns = [];
    var Cherryvue_type_script_lang_js_ = {
      name: "Cherry"
    };
    var components_Cherryvue_type_script_lang_js_ = Cherryvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(3);
    var component = Object(componentNormalizer["a"])(
      components_Cherryvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "cddd29f6"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const Cherry = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': Cherry$1
}, [Cherry$1]);

export { Cherry as C };
//# sourceMappingURL=Cherry.mjs.map
