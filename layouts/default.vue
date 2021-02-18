<template>

  <v-app class="overflow-hidden">
    
      <Header/>
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
		}
  };

</script>
<style scoped>

</style>
