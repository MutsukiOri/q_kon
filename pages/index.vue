<template>
    <v-container fluid>
      <v-row>
        <Top/>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols=12
          dense
          class="pl-2 pr-2"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title 
              v-text="card.title"></v-card-title>
              <v-card-text v-text="card.title"></v-card-text>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  import Top from '@/components/Index/top.vue';
  import News from '@/components/Index/news.vue';
  import Plan from '@/components/Index/plan.vue';
  import Calender from '@/components/Index/calender.vue'
  export default {
    components: {
      Top,
      News,
      Plan,
      Calender
    },
    data: () => ({
      cards: [
        { title: '九大混声合唱団', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 8 },
        { title: 'お知らせ', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        { title: '練習予定', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 10 },
        { title: 'カレンダー', src: require('@/components/Index/img/kosei.jpg'), flex: 10 },
      ],
    }),
  }
</script>

<style scoped>


</style>
