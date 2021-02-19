<template>
    <v-card id="news">
    <v-img
        v-bind:src="imgPath"
        class="white--text align-center"
        gradient="to bottom, rgba(10,0,0,.1), rgba(0,0,0,.5)"
        
    >
        <v-container>
          <v-card-title v-text="title">
          </v-card-title>
            <v-card>
              <v-container>
            <v-virtual-scroll
            :bench="benched"
            :items="items"
            height="600"
            item-height="600"
            color='primary'
            
            >
            <template 
            class="pa-6"
            v-slot:default="{ item }"
            >
              <v-divider></v-divider>
                <v-row >
                  
                  
                  <v-col
                  cols=12
                  class="text-center"
                  >
                  {{item.date}}
                  <strong>{{item.title}}</strong>
                  </v-col>
                  <v-col cols=12>
                  {{item.text}}
                  </v-col>
                  
                </v-row>
                

            </template>
            </v-virtual-scroll>
            </v-container>
            </v-card>
        </v-container>
    </v-img>
    </v-card>
</template>

<script>
import News from './news'
  export default {
    data: () => ({
        imgPath: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        title: 'お知らせ',
        benched: 5,
        dates: News.dates,
        titles: News.titles,
        texts: News.texts,
        
    }),
    computed: {
      items () {
        const length = this.dates.length
        return Array.from({ length: length }, (k, v) => {
          const date = this.dates[v]
          const title = this.titles[v]
          const text = this.texts[v]

          return {
            date: `${date}`,
            title: `${title}`,
            text: `${text}`
            
          }
      }
        ) 
      },
    },
  }
</script>