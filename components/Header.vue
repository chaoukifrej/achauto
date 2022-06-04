<template>
    <div>
        <v-app-bar
            app
            flat
            height="150"
            width="100vw"
            color="#121212"
            v-if="!$vuetify.breakpoint.smAndDown"
        >
            <div>
                <Logo />
            </div>
            <v-spacer></v-spacer>
            <v-btn
                class="header_menu_item"
                v-for="(menuItem,idx) in menuItems"
                :key="idx"
                text
                large
                plain
                :to="menuItem.to"
                v-anime="menuItemAnime"
            >
                {{ menuItem.text }}
            </v-btn>
        </v-app-bar>
        <v-app-bar
            app
            flat
            height="64"
            width="100vw"
            color="#121212"
            v-else
        >
            <Logo
                height="auto"
                width="64pt"
            />
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            right
        >
            <v-list>
                <v-list-item
                    v-for="(menuItem,idx) in menuItems"
                    :key="idx"
                    :to="menuItem.to"
                    @click="drawer = false"
                >
                    <v-list-item-icon>
                        <v-icon v-text="menuItem.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="menuItem.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
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
          icon: 'mdi-home'
        },
        {
          text: 'Notre expertise',
          to: '/about',
          icon: 'mdi-car-info'
        },
        {
          text: 'Contact',
          to: '/contact',
          icon: 'mdi-account-box'
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
