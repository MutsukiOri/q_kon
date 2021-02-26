<template>
  <v-card tile outlined class="pb-2">
      
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