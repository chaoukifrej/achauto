import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - achauto',
    title: 'achauto',
    htmlAttrs: {
      lang: 'fr',
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
  css: ['~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/aos', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    'nuxt-animejs',
    'nuxt-gsap-module',
  ],

  gsap: {
    /* Module Options */
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
      observer: true,
      text: true,
      attr: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Add global page transition
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      // const black_transition = document.createElement('div')
      // black_transition.classList.add('black-transition')
      // black_transition.style.position = 'absolute'
      // black_transition.zIndex = 1000
      // black_transition.style.left = 0
      // black_transition.style.top = 0
      // black_transition.style.height = '100vh'
      // black_transition.style.width = '100vw'
      // black_transition.style.background = '#000'

      // el.appendChild(black_transition)

      const red_transition = document.createElement('div')
      red_transition.classList.add('red_transition')
      red_transition.style.position = 'absolute'
      red_transition.style.zIndex = 10000
      red_transition.style.left = 0
      red_transition.style.top = 0
      red_transition.style.height = '100vh'
      red_transition.style.width = '100vw'
      red_transition.style.background = '#d40000'
      red_transition.style.display = 'flex'
      red_transition.style.flexDirection = 'column'
      red_transition.style.alignContent = 'center'
      red_transition.style.justifyContent = 'center'
      red_transition.style.textAlign = 'center'

      el.appendChild(red_transition)

      const logo_transition = document.createElement('div')
      logo_transition.classList.add('logo_transition')
      logo_transition.innerHTML = 'Ach Auto'
      logo_transition.style.color = 'white'
      logo_transition.style.fontSize = '60px'
      logo_transition.style.fontWeight = '500'

      red_transition.appendChild(logo_transition)

      this.$gsap
        .timeline()
        .fromTo(
          logo_transition,
          { opacity: 1 },
          {
            opacity: 0,
            delay: 0.5,
          }
        )
        .fromTo(
          red_transition,
          { scaleY: 1 },
          {
            scaleY: 0,
            transformOrigin: 'bottom',
            ease: 'expo.inOut',
            duration: 2,
          },
          '>-1'
        )
      // .fromTo(
      //   black_transition,
      //   { scaleY: 0 },
      //   { scaleY: 1, transformOrigin: 'top', ease: 'Power4.easeInOut' },
      //   0.2
      // )
      // .fromTo(
      //   logo_transition,
      //   { yPercent: -100, autoAlpha: 0 },
      //   { yPercent: 0, autoAlpha: 1, ease: 'Power4.easeInOut' },
      //   0.7
      // )
      //.set(red_transition, { scaleY: 0 })
      // .to(black_transition, {
      //   scaleY: 0,
      //   transformOrigin: 'top',
      //   ease: 'Power4.easeInOut',
      // })
      // .to(logo_transition, 0.2, { autoAlpha: 0 }, '-=1.2')
    },

    enter(el, done) {},

    leave(el, done) {},
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
