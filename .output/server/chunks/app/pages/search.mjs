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

var search$1 = {};

var ids = search$1.ids = [10];
var modules = search$1.modules = {
  60: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("Apple");
    };
    var staticRenderFns = [];
    var searchvue_type_script_lang_js_ = {
      name: "Search"
    };
    var pages_searchvue_type_script_lang_js_ = searchvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(3);
    var component = Object(componentNormalizer["a"])(
      pages_searchvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "0c5177f0"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const search = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': search$1
}, [search$1]);

export { search as s };
//# sourceMappingURL=search.mjs.map
