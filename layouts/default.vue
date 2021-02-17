<template>

  <v-app class="overflow-hidden">
    <Header/>
    <v-main>
        <nuxt />
    </v-main>

    <v-footer>
      <Footer/>
    </v-footer>
  </v-app>
</template>


<script>
	import Header from "@/components/header.vue"; // headerをインポート
  import Footer from "@/components/footer.vue"; // footerをインポート
	export default {
		components: {
      Header,
			Footer
		}
  };

</script>
<style scoped>

</style>
