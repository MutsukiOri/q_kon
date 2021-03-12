<template>
  <v-card tile class="overflow-hidden">
    <v-app-bar
    dark
    elevate-on-scroll
    scroll-target="#scrolling-techniques"
    color="#d7b63d"
    >
    <v-btn
        icon
        color="#cb7f69"
        v-bind:to=url
        class="button"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      
      <v-toolbar-title class="justify-center">{{title}}</v-toolbar-title>
      こんに
    </v-app-bar>
    <v-sheet
    id="scrolling-techniques"
    class="overflow-y-auto"
    color="#cb7f69"
    :max-height=height>
      
        <v-card color="#f8ecda" tile v-for="(content, index) in gallery.contents" :key="index" class="ma-7">
          <v-card-title class=" justify-center" v-text="content.title"></v-card-title>
          <v-container >
            <div class="row" :id=content.title>
            <a v-for="(image, i) in content.images" :key="i" class="col-6 col-sm-4 col-md-3 col-lg-2" :href=image>
              <img width="100%" :src=image >
            </a>
          </div>
          </v-container>
        </v-card>
    </v-sheet>
  </v-card>
</template>

<script>
import R1 from '~/components/Gallery/R1.js';
export default {
  layout: 'galleries',
  components: {
  },
    data () {
        return {
            src: require('~/assets/images/concert/2019concertfront.jpg'),
            dialog: false,
            url: '/gallery',
            title: '令和元年度',
            gallery: R1,
        }
    },
    created () {
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed () {
    if (process.client) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize () {
      this.height = window.innerHeight - 60
    },
  },
  mounted() {
    const el1 = document.getElementById('定演カレンダー')
    const el2 = document.getElementById('みんなの写真')
    window.lightGallery(el1)
    window.lightGallery(el2)
  }
}
</script>

<style scoped>
.button {
    text-decoration: none;
}
</style>