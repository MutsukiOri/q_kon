export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '九大混声合唱団',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/q_kon/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-scrollto',
    { src: '~/plugins/lightgallery.client.js' },
    // { src: '~/plugins/vue-full-calendar', ssr: false }
    
  ],
  router: {
    base: '/q_kon/'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    ['nuxt-mq']
  ],
  'mq': {
    defaultBreakpoint: 'default',
    breakpoints: {
      sm: 600,
      md: 1250,
      lg: Infinity,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: /@fullcalendar./
  },
  // deploy router base
  target: 'static',
  router: {
    base: '/q_kon/'
  }
}
