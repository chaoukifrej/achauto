<template>
    <v-app-bar
        app
        flat
        height="150"
        color="#121212"
    >
        <v-container
            fluid
            class="d-flex justify-content-between align-center"
        >

            <v-img
                src="/logo.svg"
                contain
                height="90"
                position="absolute"
                @click="$nuxt.$options.router.push('/')"
            ></v-img>
            <v-btn
                class="header_menu_item"
                v-for="(menuItem,idx) in menuItems"
                :key="idx"
                text
                large
                plain
                :to="menuItem.to"
            >
                {{ menuItem.text }}
            </v-btn>
        </v-container>
    </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          text: 'Accueil',
          to: '/',
        },
        {
          text: 'Notre expertise',
          to: '/about',
        },
        {
          text: 'Contact',
          to: '/contact',
        },
      ],
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
