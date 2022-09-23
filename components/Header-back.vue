<template>
  <div>
    <v-app-bar
      app
      flat
      height="100"
      color="#121212"
      v-if="!$vuetify.breakpoint.smAndDown"
    >
      <v-container class="d-flex align-center">
        <Logo />
        <v-spacer></v-spacer>
        <v-btn
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
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-app-bar app bottom flat height="64" width="100vw" color="#121212" v-else>
      <Logo height="100%" width="60px" />
      <v-spacer></v-spacer>
      <v-btn
        class="header_menu_item"
        v-for="(menuItem, idx) in menuItems"
        :key="idx"
        text
        plain
        :to="menuItem.to"
        v-anime="menuItemAnime"
      >
        <v-icon large>{{ menuItem.icon }}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
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
}
</script>

<style lang="scss">
.header_menu_item {
  .v-btn__content {
    font-family: 'Work Sans', sans-serif !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    letter-spacing: 0;
  }
}
</style>
