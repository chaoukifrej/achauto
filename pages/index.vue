<template>
    <div id="home">
        <v-container class="mt-16 hero_container">
            <v-row>
                <v-col
                    data-aos="fade-up"
                    cols="12"
                    class="mt-16"
                >
                    <div class="text-h6 font-weight-light text-uppercase text-center grey--text">Besoin d'un mécanicien ?</div>
                    <div class="text-h1 text-center font-weight-bold mt-5 logo-font"><span class="red-text">ACH</span> AUTO</div>
                    <div class="text-h2 text-center font-weight-medium mt-2">Maintenance de véhicule automobiles</div>
                </v-col>
                <v-col
                    data-aos="fade-up"
                    cols="12"
                    class="mt-10"
                >
                    <div class="text-h4 text-center mt-16 grey--text text--lighten-2">Nous pouvons repondre à tous vos besoins <br> en ce qui concerne la mécanique générale <br> de toutes marques de véhicules</div>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="my-16">
            <v-row>
                <v-col cols="12">
                    <v-row>
                        <v-col
                            data-aos="fade-up"
                            cols="12"
                            md="4"
                        >
                            <v-card
                                shaped
                                color="transparent"
                            >
                                <v-img
                                    :src="require('@/assets/img/achportrait.jpg')"
                                    height="500"
                                ></v-img>
                                <v-card-title class="text-body-1 grey--text text--lighten-2">
                                    Votre expert en mécanique automobile
                                </v-card-title>
                            </v-card>

                        </v-col>
                        <v-col
                            data-aos="fade-up"
                            data-aos-delay="100"
                            cols="12"
                            md="8"
                        >
                            <v-card color="transparent">
                                <v-img
                                    :src="require('@/assets/img/achportrait.jpg')"
                                    height="500"
                                ></v-img>
                                <v-card-title class="text-body-1 grey--text text--lighten-2">
                                    Notre atelier ( <nuxt-link to="/contact"> Voir sur la carte </nuxt-link> )
                                </v-card-title>
                            </v-card>
                        </v-col>

                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="py-16">
            <v-row>
                <v-col
                    cols="12"
                    md="8"
                >
                    <v-card
                        flat
                        color="transparent"
                    >
                        <v-subheader
                            data-aos="fade-right"
                            class="
                            text-h5
                            title-services
                            pl-0"
                        >
                            Nos services
                        </v-subheader>

                        <div
                            data-aos="fade-right"
                            data-aos-delay="100"
                            class="text-services mb-4"
                        >Nettoyage, réparation et remplacement des pièces et mécanismes en panne,</div>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="200"
                            class="text-services mb-4"
                        >Contrôle, dépannage et amélioration du rendement,</div>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="300"
                            class="text-services mb-4"
                        >Diagnostics, recherche de pannes, electronique...</div>
                    </v-card>
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                    data-aos="fade-left"
                >
                    <v-card
                        flat
                        color="transparent"
                    >
                        <v-subheader class="text-h5 title-services pl-0">
                            Nos atouts
                        </v-subheader>

                        <div
                            data-aos="fade-left"
                            data-aos-delay="100"
                            class="text-atouts mb-3"
                        >Polyvalence et rigueur</div>
                        <div
                            data-aos="fade-left"
                            data-aos-delay="200"
                            class="text-atouts mb-3"
                        >À l'écoute du client,</div>
                        <div
                            data-aos="fade-left"
                            data-aos-delay="300"
                            class="text-atouts mb-3"
                        >Respect des processus et de votre véhicule</div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="my-16">
            <v-row>
                <v-col
                    data-aos="fade-up"
                    data-aos-duration="900"
                    cols="12"
                >
                    <div class="text-contact-me grey--text text--lighten-1">
                        Faire confiance à ACH AUTO, c'est faire appel à un professionnel de la mécanique automobile. <br>
                        Nous sommes à votre disposition pour toutes vos demandes.
                    </div>
                </v-col>
                <v-col
                    data-aos="fade-up"
                    cols="12"
                    class="text-center"
                >
                    <v-btn
                        class="mt-16"
                        color="#d40000"
                        dark
                        large
                        to="/about"
                    >Notre expertise</v-btn>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
