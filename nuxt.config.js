import { defineNuxtConfig } from '@nuxt/bridge'


export default defineNuxtConfig({
  nitro: {
    hooks: {
      nitro: {
        // Copy shim to server output dir
        compiled: (nitro) => {
          // use env since nitro.options.preset is undefined
          if (process.env.NITRO_PRESET === "aws-lambda") {
            copyFileSync(
              join(__dirname, "lambda-shim.js"),
              join(nitro.options.output.serverDir, "lambda.js")
            );
          }
        },
      },
    },
  },
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  build: {
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].js" : "[name].js"),
      chunk: ({ isDev }) => (isDev ? "[name].js" : "[name].js"),
      css: ({ isDev }) => (isDev ? "[name].css" : "[name].css"),
      img: ({ isDev }) => (isDev ? "[path][name].[ext]" : "img/[name ].[ext]"),
      font: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "fonts/[name].[ext]",
      video: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "videos/[name].[ext]",
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      'nuxt-'
    ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

})
