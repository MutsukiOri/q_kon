<template>
	<div class="bg">
    <div>
      <Header />
    </div>
      <main>
        <div class="tab">
          <Tabs />
        </div>
        <div class="pages">
          <Nuxt />
        </div>
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
  background-color: rgb(245, 199, 140);
  padding-bottom: 25px;
}

.pages {
  padding: 3%;
  margin: 0 auto;
}

.title {
  font-family:
  HiraKakuPro-W3, "ヒラギノ角ゴ Pro W3", メイリオ, "MS P ゴシック", verdana, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}


main {
		min-height: 600px;
    /* min-width: 380px; */
		background-color: turquoise;
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
		transform: translate(0, 30px);
	}
</style>
