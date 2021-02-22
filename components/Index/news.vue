<template>
    <v-card id="news">
    <v-img
        v-bind:src="imgPath"
        class="white--text align-center"
        gradient="to bottom, rgba(10,0,0,.1), rgba(0,0,0,.5)"
        
    >
    <v-container>
      <v-card-title v-text="title"/>
      <v-col>
        <v-card>
          <v-container>
            <v-card-title>更新情報</v-card-title>
            <virtual-list  style="height: 200px; overflow-y: auto;"
            :data-key="'date'"
            :data-sources="renews"
            :data-component="renewsComponent"
            />
          </v-container>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-container>
            <v-card-title>News</v-card-title>
            <virtual-list  style="height: 400px; overflow-y: auto;"
            :data-key="'date'"
            :data-sources="news"
            :data-component="newsComponent"
            />
            </v-container>
            </v-card>
      </v-col>
        </v-container>
    </v-img>
    </v-card>
</template>

<script>
import Renews from './renews'
import News from './news'
import newsItem from './newsItem'
import renewsItem from './renewsItem'
import VirtualList from 'vue-virtual-scroll-list'
  export default {
    components: { 'virtual-list': VirtualList },
    data: () => ({
        imgPath: 'https://picsum.photos/1920/1080?random',
        title: 'お知らせ',
        renews: Renews.renews,
        news: News.newspapers,
        newsComponent: newsItem,
        renewsComponent: renewsItem,
        
    }),
    
        
  }
</script>