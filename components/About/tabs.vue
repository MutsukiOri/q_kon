<template>
  <div>
      <ol>
        <li v-for="(menuItem, index) in menuItems" :key=index>
          <router-link v-bind:to=menuItem.url>
              {{ menuItem.name }}
          </router-link>
        </li>
      </ol>
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
        name: 'Gallery',
        url: '/gallery'
      }
    ]
    }
  }
}
</script>

<style scoped>

ol {
  margin-top: 150px;
  /* margin-left: 5%; */
  /* width: 1el; */
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
</style>