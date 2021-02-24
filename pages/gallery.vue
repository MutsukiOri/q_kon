<template>
  <v-container fluid>
    <v-row>
      <v-col class="pa-2">
        <Top/>
      </v-col>
    </v-row>
    <v-row v-for="gallery in galleries" :key="gallery" :id=gallery.id>
      <v-col class="pa-2" >
        <v-card color="pink lighten-4">
          <v-card-title v-text="gallery.name"/>
          <v-container fluid>
            <v-col v-for="content in gallery.contents" :key="content">
              <v-card color="white">
                <v-card-title v-text="content.title"/>
                <v-container fluid>
                <v-row>
                  <v-col cols="6" sm="4" md="3" lg="2" v-for="(image, i) in content.images" :key="i">
                    <v-hover 
                    v-slot="{ hover }">
                    <v-card
                    :elevation="hover ? 16 : 2"
                    :class="{ 'on-hover': hover }">
                      <img width="100%" class="image" :src=image @click="content.index = i">
                    <client-only placeholder="Loading...">
                      <vue-gallery-slideshow :images="content.images" :index="content.index" @close="content.index = null" />
                    </client-only>
                    </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Top from '@/components/Gallery/gallerytop.vue';
import VueGallerySlideshow from 'vue-gallery-slideshow';
import Gallery from '~/components/Gallery/gallery.js'
  export default {
    components: {
      Top,
      VueGallerySlideshow,
    
    },
    data: () => ({
      galleries: Gallery.gallery,
      index: null,
    }),
  }
</script>