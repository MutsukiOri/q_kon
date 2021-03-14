<template>
    <v-card tile id="news">
    <v-img
        v-bind:src="imgPath"
        class="white--text align-center"
        gradient="to bottom, rgba(0,33,59,.7), rgba(252,235,239,.7)"
        
    >
    <v-container>
      <v-card-title v-text="title"/>
      <!-- <v-card-text>気になる項目をクリックorタップ</v-card-text> -->
      <v-col>
        <v-card color="#cee2df">
          
            <v-card-title style="color:#00213b" class="ml-4">更新情報</v-card-title>
            <v-card-subtitle style="color:#00213b" class="ml-4">気になる項目をクリックorタップ</v-card-subtitle>
            <v-card-text>
            <virtual-list  style="height: 200px; overflow-y: auto;"
            :data-key="'date'"
            :data-sources="renews"
            :data-component="renewsComponent"
            />
            </v-card-text>
          
        </v-card>
      </v-col>
      <v-col>
        <v-card color="#f6c0d1">
            <v-card-title style="color:#ef8893" class="ml-4">News</v-card-title>
            <v-card-text>
            <virtual-list  style="height: 400px; overflow-y: auto;"
            :data-key="'date'"
            :data-sources="news"
            :data-component="newsComponent"
            />
            </v-card-text>
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