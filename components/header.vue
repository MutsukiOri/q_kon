<template>
    <v-app-bar
      app
      dark
      absolute
      prominent
      
      shrink-on-scroll
      v-bind:src="imgPath"
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to right top, rgba(255, 161, 193,0.2), rgba(255, 128, 171, 0.8)"
        ></v-img>
      </template>
    <mq-layout mq='sm'>
      <v-app-bar-nav-icon @click="drawer = true">
      </v-app-bar-nav-icon>
          <v-navigation-drawer
          app
          v-model="drawer"
          absolute
          temporary
          floating
          color="rgba(0,0,0,0.8)"
    >
      <v-list
        nav
      >
        <v-list-item-group
          v-model="group"
          active-class="text--accent-4"
          v-for="(menuItem, index) in menuItems" 
          :key=index
        >
          <v-list-item
          v-bind:to=menuItem.url
          class="button">
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
      ><strong>
        九大混声合唱団
      </strong>
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
      imgPath: require('~/assets/images/header.jpg'),
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