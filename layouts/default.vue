<template>

  <v-app class="overflow-hidden">
    <v-card>
    <Header/>
    <v-main>
        <nuxt />
    </v-main>

    <v-footer>
      <Footer/>
    </v-footer>
    </v-card>
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
