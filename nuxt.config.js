
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  router: {
    // base: '/landingvue/'
  },
  generate: {
    fallback: true
  },
  head: {
    // this htmlAttrs you need
    htmlAttrs: {
      lang: 'es',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', },
      { rel: "stylesheet", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css' }
    ],
    script: []
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/scss/main.scss'
  ],
  stylesResources: {
    scss: ['assets/scss/main.scss']
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    //'@nuxtjs/bulma',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
