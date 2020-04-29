export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Web Hosting Indonesia Unlimited & Terbaik - Niagahoster',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'RAMADHAN DISKON 75% | Web Hosting Indonesia Unlimited Terbaik. Gratis SSL & Domain. Support 24/7 & garansi uang kembali! '
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/_main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/svg'
  ],
  styleResources: {
    scss: [
      '~assets/scss/_var.scss',
      '~assets/scss/_mixins.scss',
      '~assets/fonts/font-awesome/scss/fontawesome.scss',
      '~assets/fonts/font-awesome/scss/solid.scss',
      '~assets/fonts/font-awesome/scss/brands.scss'
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[hash:base64:5]'
        }
      }
    },
    postcss: {
      plugins: {},
      preset: {
        autoprefixer: {
          grid: true,
          flexbox: 'no-2009'
        }
      }
    }
  }
}
