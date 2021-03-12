<template>
  <v-card color="#fcebef" tile outlined class="ma-2 card" v-bind:to=source.url>
      
      <v-card-subtitle>{{ source.date }}</v-card-subtitle>
      <v-card-text>
        {{ source.text }}
      </v-card-text>
  </v-card>
</template>
 
<script>
  export default {
    name: 'item-component',
    props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.card {
  text-decoration: none;
}
</style>