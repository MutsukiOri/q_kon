<template>

  <v-app>

    <Header/>
    <!-- アプリケーションのコンポーネントに基づいてコンテンツのサイズを決定 -->
    <v-main>
      <!-- アプリケーションに適切なgutterを提供します -->
      <v-container fluid>
        <!-- vue-routerを使用している場合 -->
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
      <Footer/>
    </v-footer>
  </v-app>
</template>


<script>
	import Header from "@/components/header.vue"; // headerをインポート
  import Footer from "@/components/footer.vue"; // footerをインポート
  import Tabs from "@/components/tabs.vue"
	export default {
		components: {
      Header,
      Tabs,
			Footer
		}
  };

</script>
<style scoped>

</style>
