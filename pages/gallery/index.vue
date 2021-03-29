<template>
  <v-container fluid>
    <v-row>
      <v-col class="pa-2">
        <Top/>
      </v-col>
    </v-row>
    <v-row>
    <v-col cols="6" sm="4" md="3" v-for="(gallery, ind) in galleries" :key="ind" :id="gallery.id">
      <v-card
      tile
      dark
      v-bind:to=gallery.url
      >
        <v-img
        v-bind:src="gallery.thumbnail"
        class="white--text align-end"
        gradient="to top, rgba(1,3,20,.3), rgba(1,3,20,.4)"
        height="300"
        >
          <v-card-title class="justify-center">
            {{gallery.name}}
          </v-card-title>
        </v-img>
      </v-card>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Top from '@/components/Gallery/gallerytop.vue';
import VueGallerySlideshow from 'vue-gallery-slideshow';
import Gallery from '~/components/contents/Gallery/gallery.js';
  export default {
    components: {
      Top,
      VueGallerySlideshow,
    },
    data: () => ({
      galleries: Gallery.gallery,
      imgPath: require('~/assets/images/2020shiiki.jpg'),
      isActive: false,
      
    }),
  }
</script>