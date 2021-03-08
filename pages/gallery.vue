<template>
  <v-container fluid>
    <v-row>
      <v-col class="pa-2">
        <Top/>
      </v-col>
    </v-row>
    <v-row>
    <v-col cols="6" sm="4" md="3" v-for="(gallery, ind) in galleries" :key="ind" :id="gallery.id">
      
        <v-dialog
        v-model="gallery.dialog"
        width="100%"
        hide-overlay
        fullscreen
        transition-group="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card
              tile
              dark
              v-bind="attrs"
              v-on="on"
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
          </template>
          <v-card class="overflow-hidden">
            <v-app-bar
            dark
            
            scroll-target="#scrolling-techniques"
            color="#F5917E"
            >
            <v-btn
                icon
                dark
                @click="gallery.dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              
              <v-app-bar-title class="justify-center">{{gallery.name}}</v-app-bar-title>
              
          
              
            </v-app-bar>
            <v-sheet 
            id="scrolling-techniques"
            class="overflow-y-auto"
            max-height="800">
            <v-container fluid>
              <v-col v-for="(content, index) in gallery.contents" :key="index">
                <v-card color="white">
                  <v-card-title class="justify-center" v-text="content.title"/>
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
            </v-sheet>
          </v-card>
        </v-dialog>
    </v-col>
    </v-row>
    <!-- <v-row>
    <div id="lightgallery" class="row">
      <a class="col-6 col-md-4 col-lg-3" href="https://dzine.io/products/lightgallery-wp-plugin/static/images/demo/image-6-lg.jpg">
        <img width="100%" class="img-thumbnail" src="https://dzine.io/products/lightgallery-wp-plugin/static/images/demo/thumb-6.jpg" >
      </a>
      <a class="col-6 col-md-4 col-lg-3" href="https://dzine.io/products/lightgallery-wp-plugin/static/images/demo/image-12-lg.jpg">
        <img width="100%" class="img-thumbnail" src="https://dzine.io/products/lightgallery-wp-plugin/static/images/demo/thumb-12.jpg" >
      </a>
      <a class="col-6 col-md-4 col-lg-3" :href="imgPath">
        <img width="100%" class="img-thumbnail" :src="imgPath">
      </a>
    </div>
    </v-row> -->
  </v-container>
</template>

<script>
import Top from '@/components/Gallery/gallerytop.vue';
import VueGallerySlideshow from 'vue-gallery-slideshow';
import Gallery from '~/components/Gallery/gallery.js'

// import lightGallery from 'lightgallery'
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
    mounted() {
    const el = document.getElementById('lightgallery')
    window.lightGallery(el)
  }
  }
</script>