
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '"personal site"',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || "Oh hi, this is Anna Erdiawan's personal site. I'm a Web developer interested in UI and UX."
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://erdiawan.com',
      },
      {
        property: 'og:title',
        content: "erdiawan.com - Hi, I'm Erdi!",
      },
      {
        property: 'og:description',
        content: "Oh hi, this is Anna Erdiawan's personal site. I'm a Web developer interested in UI and UX.",
      },
      {
        property: 'og:image',
        content: 'https://erdiawan.com/erdiawan-open-graph.jpg',
      },
      {
        property: 'fb:app_id',
        content: '988591554889425',
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:url',
        content: 'https://erdiawan.com',
      },
      {
        property: 'twitter:title',
        content: "erdiawan.com - Hi, I'm Erdi!",
      },
      {
        property: 'twitter:description',
        content: "Oh hi, this is Anna Erdiawan's personal site. I'm a Web developer interested in UI and UX.",
      },
      {
        property: 'twitter:image',
        content: 'https://erdiawan.com/erdiawan-open-graph.jpg',
      },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/svg+xml', href: 'favicon.svg?v=1' },
      { rel: 'shortcut icon', type: 'image/svg+xml', href: 'favicon.svg' },
      { rel: 'mask-icon', href: 'favicon.svg', color: '#ffffff' },
      { rel: 'apple-touch-icon', sizes: '512x512', href: 'favicon.png?v=1' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#51e3d4'
  },
  /*
  ** Global CSS
  */
 css: [{ src: '~/assets/sass/style.sass', lang: 'sass' }],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    ['@nuxtjs/markdownit'],
  ],
  markdownit: {
    injected: true,
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://erdiawan.com',
    generate: true, // Enable me when using nuxt generate
    exclude: [
      '/covid/**'
    ],
    routes: []
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://erdiawan.com/sitemap.xml'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    extendServer: app => {
      app.disable('x-powered-by')
    }
  },
  buildDir: 'build',
  // layoutTransition: {
  //   name: 'layout',
  //   mode: 'out-in'
  // },
  // pageTransition: {
  //   name: 'page',
  //   mode: 'out-in',
  //   beforeEnter (el) {
  //     console.log('Before enter...');
  //   }
  // },
  generate: {
    fallback: true,
    routes: [
      '/covid',
      '/journal',
    ],
    routes: function() {
        const fs = require('fs');
        const path = require('path');
        return fs.readdirSync('./assets/content/blog').map(file => {
            return {
                route: `/blog/${path.parse(file).name}`, // Return the slug
                payload: require(`./assets/content/blog/${file}`),
            };
        });
    },
  },
  pwa: {
    manifest: {
      name: 'erdiawan.com',
      short_name: "Erdiawan Anna",
      lang: 'en',
      description: "Anna Erdiawan Personal Site",
    }
  }
}
