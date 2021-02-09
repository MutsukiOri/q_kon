<template>
	<div class="bg">
    <div>
      <Tabs />
      <Header />

    </div>
      <main class="container">
      <Nuxt />
		</main>
    


	</div>
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
.bg {
  background-color: burlywood;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

	main {
		min-height: 600px;
		/* background-color: #ddd; */
		text-align: center;
		padding: 30px;
	}
	.page-enter-active,
	.page-leave-active {
		transition: 0.4s ;
	}
	.page-enter,
	.page-leave-active {
		opacity: 0;
		transform: translate(0, 300px);
	}
</style>
