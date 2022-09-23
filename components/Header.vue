<template>
  <header>
    <div class="l">
      <Logo />
    </div>
    <div class="r">
      <v-btn id="menu_icon_btn" dark x-large icon>
        <v-icon x-large>mdi-menu</v-icon>
      </v-btn>
    </div>
    <div id="menu_icon_trigger"></div>
    <!-- <v-btn
        class="header_menu_item"
        v-for="(menuItem, idx) in menuItems"
        :key="idx"
        text
        large
        plain
        :to="menuItem.to"
        v-anime="menuItemAnime"
      >
        {{ menuItem.text }}
      </v-btn> -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menuItems: [
        {
          text: 'Accueil',
          to: '/',
          icon: 'mdi-home',
        },
        {
          text: 'Expertise',
          to: '/about',
          icon: 'mdi-car-info',
        },
        {
          text: 'Contact',
          to: '/contact',
          icon: 'mdi-card-account-details',
        },
      ],

      menuItemAnime: {
        opacity: [0, 1],
        translateY: [-100, 0],
        duration: 600,
        delay: 100,
        loop: false,
        easing: 'easeInOutQuad',
      },
    }
  },
  mounted() {
    this.animateOnScroll()
  },
  methods: {
    animateOnScroll() {
      this.$Observer.create({
        target: window,
        type: 'scroll',
        onChange: (self) => {
          const menuBtn = document.querySelector('#menu_icon_btn')
          if (
            (self.target.scrollY + 75 > self.target.innerHeight &&
              self.target.scrollY + 75 < self.target.innerHeight * 2) ||
            self.target.scrollY + 75 > self.target.innerHeight * 3
          ) {
            menuBtn.style.color = 'black'
          } else {
            menuBtn.style.color = 'white'
          }
        },
      })
    },
  },
}
</script>

<style lang="scss">
header {
  position: fixed;
  width: 100%;
  display: flex;
  pointer-events: none;
  align-items: center;
  justify-content: space-between;
  padding: calc(15px + 2%) calc(15px + 2%) calc(15px + 2%) calc(25px + 2%);
  z-index: 9997;
  .l {
    pointer-events: auto;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .r {
    pointer-events: auto;
    z-index: 10;
  }
  #menu_icon_trigger {
    position: absolute;
    top: 100vh;
    height: 100vh;
  }
}
</style>
