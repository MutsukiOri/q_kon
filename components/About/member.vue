<template>
  <v-card id="member">
    <v-container>
      <v-card-title>
        団員紹介
      </v-card-title>
      <v-row>
        <v-col cols="12" lg="3" sm="6" v-for="(image, i) in images" :key="i">
                    <img width="100%" class="image" :src=image @click="index = i">
                    <client-only placeholder="Loading...">
                      <vue-gallery-slideshow :images="images" :index="index" @close="index = null" />
                    </client-only>
                  </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';
  export default {
    components: {
    VueGallerySlideshow,
    },
    data: () => ({
      images: [
        '/images/member/sop2019.jpg',
        '/images/member/alt2019.jpg',
        '/images/member/tenor2019.jpg',
        '/images/member/bass2019.jpg',
      ],
      index: null
    }),
  }
</script>