<template>

  <v-app style="background-color:#fcebef;">
      <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
      dark
      floating
      color="rgba(243,167,172,0.8)"
      >
        <v-list
          nav
        >
          <v-list-item-group
            v-model="group"
            active-class="text--accent-4"
            v-for="(menuItem, index) in menuItems"
            :key=index
          >
            <v-list-item
            v-bind:to=menuItem.url
            class="button">
              <v-list-item-icon>
                <v-icon>{{ menuItem.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{menuItem.name}}</v-list-item-title>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <Header
        @navigationDrawer="drawer = true"
      />
      <v-main>
        <nuxt />
      </v-main>
      <ButtonToTop/>
      <v-footer>
        <Footer/>
      </v-footer>
  </v-app>
</template>


<script>
	import Header from "@/components/header.vue"; // headerをインポート
  import Footer from "@/components/footer.vue"; // footerをインポート
  import ButtonToTop from '@/components/ButtonToTop.vue';
	export default {
		components: {
      Header,
      Footer,
      ButtonToTop
    },
    data () {
      return {
        menuItems: [
      {
        name: 'Home',
        url: '/',
        icon: 'mdi-home-outline'
      },
      {
        name: 'About',
        url: '/about',
        icon: 'mdi-account-outline'
      },
      {
        name: 'Info',
        url: '/info',
        icon: 'mdi-information-outline'
      },
      {
        name: 'Gallery',
        url: '/gallery',
        icon: 'mdi-image-multiple-outline'
      }
    ],
    drawer: false,
    }
  }
};

</script>
<style scoped>
.button {
    text-decoration: none;
}
</style>
