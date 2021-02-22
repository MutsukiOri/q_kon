<template>
  <v-row>
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="2">
      {{ source.date }}
      </v-col>
      <v-col cols=10>
        {{ source.text }}
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