<template>
    <v-app-bar
      app
      absolute
      dark
      hide-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

    <mq-layout mq='sm'>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="text--accent-4"
          v-for="(menuItem, index) in menuItems" 
          :key=index
        >
          <v-list-item v-bind:to=menuItem.url>
            <v-list-item-icon>
              <v-icon>{{ menuItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{menuItem.name}}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    </mq-layout>

      <v-app-bar-title
      class="pl-10"
      >
      九大混声合唱団
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <mq-layout mq='md+'
      align="center"
      justify="space-around"
      v-for="(menuItem, index) in menuItems" 
      :key=index
      class="pr-5 pt-5"
      >
        <v-btn
        outlined
        v-bind:to=menuItem.url
        class="button"
        >
        <v-icon>{{ menuItem.icon }}</v-icon>
        {{ menuItem.name }}
        </v-btn>
      </mq-layout>

    </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
      {
        name: 'Home',
        url: '/',
        icon: 'mdi-home-outline'
      },
      {
        name: 'About',
        url: '/about',
        icon: 'mdi-account-outline'
      },
      {
        name: 'Info',
        url: '/info',
        icon: 'mdi-information-outline'
      },
      {
        name: 'Gallery',
        url: '/gallery',
        icon: 'mdi-image-multiple-outline'
      }
    ],
    drawer: false,
    group: null,
    }
  }
}
</script>

<style scoped>
.button {
    text-decoration: none;
}
</style>