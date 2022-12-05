const dynamicChunks = {
 ['Apple.js']: () => import('../app/Apple.mjs').then(function (n) { return n.A; }),
 ['Blue.js']: () => import('../app/Blue.mjs').then(function (n) { return n.B; }),
 ['Cherry.js']: () => import('../app/Cherry.mjs').then(function (n) { return n.C; }),
 ['Grey.js']: () => import('../app/Grey.mjs').then(function (n) { return n.G; }),
 ['Melon.js']: () => import('../app/Melon.mjs').then(function (n) { return n.M; }),
 ['Page.js']: () => import('../app/Page.mjs').then(function (n) { return n.P; }),
 ['pages/_.js']: () => import('../app/pages/_.mjs').then(function (n) { return n._; }),
 ['pages/about.js']: () => import('../app/pages/about.mjs').then(function (n) { return n.a; }),
 ['pages/index.js']: () => import('../app/pages/index.mjs').then(function (n) { return n.i; }),
 ['pages/search.js']: () => import('../app/pages/search.mjs').then(function (n) { return n.s; })
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
//# sourceMappingURL=_dynamic-require.mjs.map
