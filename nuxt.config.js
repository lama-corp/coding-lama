export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'coding-lama',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // https://www.npmjs.com/package/v-click-outside
    '~/plugins/vue-directive-click-outside',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org
    '@nuxtjs/i18n',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // https://i18n.nuxtjs.org
  i18n: {
    strategy: 'prefix_except_default',
    langDir: 'locales/',
    defaultLocale: 'fr',
    locales: [
      { code: 'en', file: 'en.js' },
      { code: 'fr', file: 'fr.js' },
    ],
    lazy: true,
    vueI18n: {
      fallbackLocale: 'fr',
    },
  },
}
