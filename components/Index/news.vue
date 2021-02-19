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
            <v-virtual-scroll
            :bench="benched"
            :items="items"
            height="600"
            item-height="200"
            color='primary'
            
            >
            <template 
            class="align-end"
            v-slot:default="{ item }"
            >
              <v-divider></v-divider>
                <v-list-item :key="item">
                    <v-list-item-content>
                        <v-list-item-subtitle class="text-align:">
                            {{item.date}}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item :key="item">
                    <v-list-item-content>
                        <v-list-item-title class="text-align:">
                            <strong>{{ item.title}}</strong>
                        </v-list-item-title>
                        <v-list-item-subtitle 
                        
                        style="white-space:pre-wrap; word-wrap:break-word;">
                          {{ item.text }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                

            </template>
            </v-virtual-scroll>
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