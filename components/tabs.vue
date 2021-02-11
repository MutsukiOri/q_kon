<template>
  <div class="about">
      <ol class="container">
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
        name: 'Info',
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
.about {
    margin: 0 auto;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    text-align: left;
    background-color: rgba(209, 89, 103, 0.833);
    border-radius: 20px;
}
ol {
  /* margin: 0 auto; */
  width: 100%;
  justify-content: center;
  align-items: center;
  display:flex;
  list-style: none;
  /* background-color: yellowgreen; */
  opacity: 1;
}

li {
  width: 100%;
  max-width: 250px;
  height: 50px;
  /* margin-bottom: 5px; */
  margin-left: -30px;
  font-size: 17px;
  text-align: center;
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
  color: white;
  text-decoration: none;
  line-height: 50px;
  transition: 0.7s;
}

a:hover {
  color: black;
}

</style>