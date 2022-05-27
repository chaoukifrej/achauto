<template>
    <div id="home">
        <v-container class="mt-16 hero_container">
            <v-row>
                <v-col
                    cols="12"
                    class="mt-16"
                >
                    <div class="text-h6 font-weight-light text-uppercase text-center grey--text">Besoin d'un mécanicien ?</div>
                    <div class="text-h1 text-center font-weight-bold mt-5"><span class="red-text">ACH</span> AUTO</div>
                    <div class="text-h2 text-center font-weight-medium mt-2">Maintenance de véhicule automobiles</div>
                </v-col>
                <v-col
                    cols="12"
                    class="mt-10"
                >
                    <div class="text-h4 text-center mt-16 grey--text text--lighten-2">Nous pouvons repondre à tous vos besoins <br> en ce qui concerne la mécanique générale <br> de toutes marques de véhicules</div>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="mt-16">
            <v-row>
                <v-col cols="12">
                    <v-row>
                        <v-col
                            cols="12"
                            md="4"
                        >
                            <v-card shaped>
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
                            cols="12"
                            md="4"
                        >
                        </v-col>
                        <v-col
                            cols="12"
                            md="4"
                        >
                        </v-col>
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                    class="text-center"
                >
                    <v-btn
                        class="mt-16"
                        color="#d40000"
                        dark
                        large
                        to="/contact"
                    >Nous contacter</v-btn>
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
