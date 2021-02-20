<template>
    <v-card id="news">
    <v-img
        v-bind:src="imgPath"
        class="white--text align-center"
        gradient="to bottom, rgba(10,0,0,.1), rgba(0,0,0,.5)"
        max-height="600"
    >
    <v-container>
      <v-card-title v-text="title"/>
        <v-card>
          <v-container>
            
            <virtual-list  style="height: 400px; overflow-y: auto;"
            :data-key="'date'"
            :data-sources="items"
            :data-component="itemComponent"/>
              
            </v-container>
            </v-card>
        </v-container>
    </v-img>
    </v-card>
</template>

<script>
import News from './news'
import Item from './newsItem'
import VirtualList from 'vue-virtual-scroll-list'
  export default {
    components: { 'virtual-list': VirtualList },
    data: () => ({
        imgPath: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        title: 'お知らせ',
        items: News.newspapers,
        itemComponent: Item,
        
    }),
    
        
  }
</script>