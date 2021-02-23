<template>
  <v-card id="R2">
    <v-container>
      <v-row>
        <v-col cols="2" v-for="(image, i) in images" :key="i">
          <img width="100%" class="image" :src="image" @click="index = i">
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
import Lingallery from 'lingallery';
  export default {
    components: {
    VueGallerySlideshow,
    Lingallery,
    },
    data: () => ({
      images: [
                    require("~/assets/images/R2/concert_calender/1.jpg"),
                    "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
                    "https://i.wifegeek.com/200426/5fa51df3.jpg",
                    "https://i.wifegeek.com/200426/663181fe.jpg",
                    "https://i.wifegeek.com/200426/2d110780.jpg",
                    "https://i.wifegeek.com/200426/e73cd3fa.jpg",
                    "https://i.wifegeek.com/200426/15160d6e.jpg",
                    "https://i.wifegeek.com/200426/d0c881ae.jpg",
                    "https://i.wifegeek.com/200426/a154fc3d.jpg",
                    "https://i.wifegeek.com/200426/71d3aa60.jpg",
                    "https://i.wifegeek.com/200426/d17ce9a0.jpg",
                    "https://i.wifegeek.com/200426/7c4deca9.jpg",
                    "https://i.wifegeek.com/200426/64672676.jpg",
                    "https://i.wifegeek.com/200426/de6ab9c6.jpg",
                    "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
                    "https://i.wifegeek.com/200426/4085d03b.jpg",
                    "https://i.wifegeek.com/200426/177ef44c.jpg",
                    "https://i.wifegeek.com/200426/d74d9040.jpg",
                    "https://i.wifegeek.com/200426/81e24a47.jpg",
                    "https://i.wifegeek.com/200426/43e2e8bb.jpg"

                ],
      index: null,
    }),
  }
</script>