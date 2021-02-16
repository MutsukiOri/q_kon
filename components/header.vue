<template>
    <v-app-bar
        app
        flat
    >
      <v-app-var-title
      >
      九大混声合唱団
      </v-app-var-title>

      <v-spacer></v-spacer>
      <mq-layout mq='md+'
      align="center"
      justify="space-around"
      v-for="(menuItem, index) in menuItems" 
      :key=index
      >
        <v-btn
        depressed
        v-bind:to=menuItem.url
        class="button"
        >
        <v-icon>{{ menuItem.icon }}</v-icon>
        {{ menuItem.name }}
        </v-btn>
      </mq-layout>

      <mq-layout mq='sm'
      >

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
    ]
    }
  }
}
</script>

<style scoped>
.button {
    text-decoration: none;
}
</style>