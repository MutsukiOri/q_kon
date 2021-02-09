<template>
  <div class="bg">
    <header>
      <router-link to="/">
      <img src="@/assets/q_kon_header.jpg"/>
      </router-link>
    </header>
      <ol>
        <li v-for="(menuItem, index) in menuItems" :key=index>
          <router-link v-bind:to=menuItem.url>
              {{ menuItem.name }}
          </router-link>
        </li>
      </ol>
    <Nuxt />
  </div>
</template>

<script>

export default {
    name: 'TabMenu',
  data () {
    return {
      menuItems: [
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'About',
        url: '/about'
      },
      {
        name: 'info',
        url: '/info'
      },
      {
        name: 'Gallary',
        url: '/Gallary'
      },
      {
        name: 'Scroll',
        url: '/scroll'
      }
    ]
    }
  }
}
</script>

<style scoped>

ol {
  /* margin-right: auto; */
  /* margin-left: 5%; */
  width: 1el;
  /* display:flex; */
  list-style: none;
  position: fixed;
  /* background-color: yellowgreen; */
}

li {
  width: 120px;
  height: 50px;
  /* margin-left:0px;
  margin-right:10px; */
  font-size: 17px;
  position: relative;
  /* background-color: skyblue; */
  border-radius: 10px;
  transition: 1s;
}

li:hover {
  /* background-color: yellowgreen; */
}
img {
  width: 50%;
  position: fixed;
  margin-left: 10%;
  margin-right: 10%;
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: black;
  text-decoration: none;
  line-height: 50px;
  transition: 1s;
}

a:hover {
  color: red;
}
.bg {
  background-color: bisque;
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>