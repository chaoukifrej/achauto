<template>
  <div id="home">
    <div id="cursor_ball"></div>
    <section class="first_section">
      <div
        class="first_container d-flex flex-column"
        id="first_section_container"
      >
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
        <div class="wrapper">
          <h1 class="welcome_title h1-text text-uppercase mt-3">
            Maintenance de véhicule automobiles dans le Var
          </h1>
        </div>
        <div class="welcome_text">
          <div class="wrapper">
            <div class="one">Le mécanicien</div>
          </div>
          <div class="wrapper">
            <div class="two">que vous attendiez,</div>
          </div>
          <div class="wrapper">
            <div class="three">
              pour
              <span class="welcome_text_transform"> votre véhicule</span>
            </div>
          </div>
        </div>
        <v-btn class="welcome_btn" color="#d40000" dark large to="/contact"
          >Nous contacter</v-btn
        >
      </div>
      <div class="second_container" id="first_section_illustration"></div>
    </section>
    <section class="second_section">
      <div class="our_services">
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
        <v-btn color="#d40000" dark large to="/about">En savoir plus</v-btn>
      </div>
      <div class="our_assets_container">
        <div class="our_assets">
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
              compétitifs. Toujours dans le <strong>respect</strong> des
              processus et de votre véhicule.
            </p>
          </div>
          <v-btn color="#d40000" dark large to="/about">En savoir plus</v-btn>
        </div>
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
      this.$gsap.from('#welcome_to', {
        scale: 0,
        opacity: 0,
        duration: 3,
        delay: 0.8,
        ease: 'elastic.out(1, 0.3)',
      })
      this.$gsap.to('#welcome_to', {
        rotation: -360,
        duration: 5,
        ease: 'none',
        repeat: -1,
      })

      let tl = this.$gsap.timeline().delay(1)

      tl.fromTo(
        '.welcome_title',
        { yPercent: 101 },
        { yPercent: 0, duration: 0.25 }
      )
        .fromTo(
          '.one',
          { yPercent: 101 },
          { yPercent: 0, duration: 0.25 },
          '>-0.1'
        )
        .fromTo(
          '.two',
          { yPercent: 101 },
          { yPercent: 0, duration: 0.25 },
          '>-0.1'
        )
        .fromTo(
          '.three',
          { yPercent: 101 },
          { yPercent: 0, duration: 0.25 },
          '>-0.1'
        )
    },
    animateOnScroll() {
      const container = document.querySelector('#first_section_container')
      const illustration = document.querySelector('#first_section_illustration')
      const ourServices = document.querySelector('.our_services')
      const ourAssets = document.querySelector('.our_assets')

      this.$gsap.set(ourServices, { opacity: 0 })
      this.$gsap.set(ourAssets, { opacity: 0 })

      this.$Observer.create({
        target: window,
        type: 'scroll',
        onChange: (self) => {
          let scrollPercent =
            (self.target.scrollY / self.target.innerHeight) * 100

          container.style.transform = `translateY(-${scrollPercent * 2}px)`
          container.style.opacity = 1 - scrollPercent / 100

          illustration.style.transform = `translateX(${scrollPercent * 2}px)`

          ourServices.style.opacity = scrollPercent / 100 - 0.2
          ourAssets.style.opacity = scrollPercent / 2 / 100 - 0.2

          console.log(scrollPercent / 100)
        },
      })
      //this.$gsap.to(window, { duration: 2, scrollTo: 1000 })
      /* this.$gsap.from('#our_services', {
        opacity: 0,
        scrollTrigger: {
          trigger: '.second_section .first_container',
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
