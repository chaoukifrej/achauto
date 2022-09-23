<template>
  <div id="home">
    <div id="cursor_ball"></div>
    <section class="first_section">
      <div class="first_container d-flex flex-column">
        <div
          class="welcome"
          id="welcome_to"
          aria-label="Bienvenue sur Ach auto"
          style="opacity: 1; visibility: inherit; fill: white"
        >
          <svg viewBox="0 0 100 100">
            <title>Ach auto</title>
            <defs>
              <path
                id="c-1"
                d="M 50, 50m -25, 0 a 25,25 0 1,1 50,0 a 25,25 0 1,1-50,0"
              ></path>
            </defs>
            <text font-size="8">
              <textPath xlink:href="#c-1">Bienvenue sur Ach auto</textPath>
            </text>
          </svg>
        </div>
        <h1 class="h1-text text-uppercase mt-3">
          Maintenance de véhicule automobiles dans le Var
        </h1>
        <div class="welcome_text">
          <div class="one"></div>
          <div class="two"></div>
          <div class="three">
            <span class="first"></span>
            <span class="second welcome_text_transform"></span>
          </div>
        </div>
        <v-btn class="welcome_btn" color="#d40000" dark large to="/contact"
          >Nous contacter</v-btn
        >
      </div>
      <div class="second_container"></div>
    </section>
    <section class="second_section">
      <div class="first_container">
        <div id="our_services">
          <h3>
            <span>Nos services</span><br />
            <strong>Mécanique automobile</strong>
          </h3>
          <div class="text_info">
            <p>
              Nettoyage, <strong> réparation</strong> et remplacement des pièces
              et mécanismes en panne. <strong> Contrôle, dépannage</strong> et
              amélioration du rendement. <strong>Diagnostics</strong>, recherche
              de pannes , electronique...
            </p>
          </div>
          <v-btn class="welcome_btn" color="#d40000" dark large to="/about"
            >En savoir plus</v-btn
          >
        </div>
      </div>
      <div class="second_container">
        <h3>
          <span>Nos atouts</span><br />
          <strong>Mécanique automobile</strong>
        </h3>
        <div class="text_info">
          <p>
            <strong>La polyvalence et la rigueur</strong> dont nous faisons
            preuve pour chacune des tâches qui nous confiées.
            <strong>À votre écoute</strong>, nous prenons en compte
            <strong>vos besoins</strong> et vous proposons les prix les plus
            compétitifs. Toujours dans le <strong>respect</strong> des processus
            et de votre véhicule.
          </p>
        </div>
        <v-btn class="welcome_btn" color="#d40000" dark large to="/about"
          >En savoir plus</v-btn
        >
      </div>
    </section>
    <section class="third_section">
      <div class="portrait_container">
        <v-parallax :src="require('@/assets/img/ach_portrait.jpg')">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h2>Achraf</h2>
              <div class="subheading">Un expert à votre écoute</div>
            </v-col>
          </v-row></v-parallax
        >
      </div>
    </section>
    <section class="fourth_section">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h2>Nous sommes à votre disposition !</h2>
          <div class="subheading">
            Faire confiance à ACH AUTO, c'est faire appel à un professionnel de
            la mécanique automobile.
          </div>
          <v-btn class="mt-16" color="#16141c" dark large to="/contact"
            >Contactez nous
          </v-btn>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      logo: {
        rotate: 360,
        duration: 3000,
        loop: false,
      },
    }
  },
  mounted() {
    this.animateOnEnter()
    this.animateOnScroll()
    this.animateCursorBall()
  },
  methods: {
    animateOnEnter() {
      let tl = this.$gsap.timeline()
      const textEase = 'none'

      this.$gsap.set('.welcome_btn', { opacity: 0, yPercent: 150 })

      tl.to('.welcome_text .one', {
        duration: 1,
        text: {
          value: 'Le mécanicien',
        },
        ease: textEase,
      })
        .to(
          '.welcome_text .two',
          {
            duration: 1,
            text: {
              value: 'que vous attendiez,',
            },
            ease: textEase,
          },
          '>-0.5'
        )
        .to(
          '.welcome_text .three .first',
          {
            duration: 1,
            text: {
              value: 'pour ',
              speed: 1,
            },
            ease: textEase,
          },
          '>-0.5'
        )
        .to(
          '.welcome_text .three .second',
          {
            duration: 1,
            text: {
              value: 'votre véhicule',
            },
            ease: textEase,
          },
          '>-0.8'
        )
        .to(
          '.welcome_btn',
          { opacity: 1, yPercent: 0, duration: 0.5, ease: 'power4.out' },
          '>-1'
        )
    },
    animateOnScroll() {
      this.$gsap.from('#welcome_to', {
        scale: 0,
        opacity: 0,
        duration: 3,
        ease: 'elastic.out(1, 0.3)',
      })
      this.$gsap.to('#welcome_to', {
        rotation: -360,
        duration: 5,
        ease: 'none',
        repeat: -1,
      })

      //this.$gsap.to(window, { duration: 2, scrollTo: 1000 })
      /* this.$gsap.from('#our_services', {
        y: 500,
        opacity: 0.2,
        scrollTrigger: {
          trigger: '.second_section .first_container',
          toggle_actions: 'restart pause reverse pause',
          start: '-200%',
          scrub: 1,
          markers: true,
        },
      }) */
    },
    animateCursorBall() {
      this.$gsap.set('#cursor_ball', { xPercent: -50, yPercent: -50 })

      const ball = document.querySelector('#cursor_ball')
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      const mouse = { x: pos.x, y: pos.y }
      const speed = 0.15

      const xSet = this.$gsap.quickSetter(ball, 'x', 'px')
      const ySet = this.$gsap.quickSetter(ball, 'y', 'px')

      window.addEventListener('mousemove', (e) => {
        mouse.x = e.x
        mouse.y = e.y
      })

      this.$gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, this.$gsap.ticker.deltaRatio())

        pos.x += (mouse.x - pos.x) * dt
        pos.y += (mouse.y - pos.y) * dt
        xSet(pos.x)
        ySet(pos.y)
      })
    },
  },
}
</script>

<style lang="scss"></style>
