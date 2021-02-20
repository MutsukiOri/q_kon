<template>
  <v-row>
      <v-col dense>
      {{ source.date }} - 
      <strong>{{ source.title }}</strong>
      </v-col>
      <v-col cols=12>
        {{ source.text }}
        <v-divider></v-divider>
      </v-col>
  </v-row>
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