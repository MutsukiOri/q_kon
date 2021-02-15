<template>
  <v-tabs
    v-model="tab"
    background-color="red lighten-2"
    dark
    centered
    grow
    class="container"
  >
    <v-tab
      v-for="(menuItem, index) in menuItems" 
      :key=index
    >
      <router-link v-bind:to=menuItem.url>
        {{ menuItem.name }}
      </router-link>
    </v-tab>
  </v-tabs>
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
.container {
  border-radius: 20px;
}
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
  color: gray;
}



</style>