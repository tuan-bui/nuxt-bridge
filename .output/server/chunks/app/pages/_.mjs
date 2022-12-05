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

var _$1 = {};

var ids = _$1.ids = [7];
var modules = _$1.modules = {
  62: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c; _vm._self._setupProxy;
      return _c("Page", [_c("Apple"), _vm._v(" "), _c("Cherry")], 1);
    };
    var staticRenderFns = [];
    var vue_runtime = __webpack_require__(0);
    var _vue_type_script_lang_js_ = vue_runtime["b"].extend({
      components: {
        Page: () => __webpack_require__.e(5).then(__webpack_require__.bind(null, 64)),
        Apple: () => __webpack_require__.e(0).then(__webpack_require__.bind(null, 65)),
        Cherry: () => __webpack_require__.e(2).then(__webpack_require__.bind(null, 63))
      }
    });
    var pages_vue_type_script_lang_js_ = _vue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(3);
    var component = Object(componentNormalizer["a"])(
      pages_vue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "406f2c72"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const _ = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': _$1
}, [_$1]);

export { _ };
//# sourceMappingURL=_.mjs.map
