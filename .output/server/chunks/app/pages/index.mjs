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

var pages = {};

var ids = pages.ids = [9];
var modules = pages.modules = {
  61: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("Tutorial");
    };
    var staticRenderFns = [];
    var transformunpluginName_nuxt_legacy_capi_key_transform_pagesvue_type_script_lang_js_ = {
      name: "Main"
    };
    var pagesvue_type_script_lang_js_ = transformunpluginName_nuxt_legacy_capi_key_transform_pagesvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(3);
    var component = Object(componentNormalizer["a"])(
      pagesvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "7efc78ba"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const index = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': pages
}, [pages]);

export { index as i };
//# sourceMappingURL=index.mjs.map
