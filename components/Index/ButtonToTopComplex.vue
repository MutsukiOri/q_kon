<template>
    <transition name="fade">
        <v-speed-dial
        v-model="on"
        v-scroll="onScroll"
        v-show="fab"
        open-on-hover
        absolute
        bottom
        right
        direction="top"
        fixed>
          <template v-slot:activator>
            <v-btn
            v-model="on"
            @click='toTop'
            dark
            fab
            >
              <v-icon>
                mdi-chevron-up
              </v-icon>
            </v-btn>
          </template>
        <v-btn
          fab
          dark
          small
          outlined
          
          v-scroll-to='"#news"'
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          outlined
          color="white"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          outlined
          color="white"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
    </v-speed-dial>
  </transition>
</template>

<script>
export default {
  data: () => {
    return {
      fab: false
    };
  },
  methods: {
    onScroll (e){
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 0
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: 1.5s;
} 
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>