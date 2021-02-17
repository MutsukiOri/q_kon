<template>
    <v-container fluid>
      <v-row>
        <v-col
          :cols=12
          dense
          class="pa-2"
        >
        <Top/>
        </v-col>
        <v-col
          :cols=12
          dense
          class="pa-2"
        >
        <News/>
        </v-col>
        <v-col
          :cols=12
          dense
          class="pa-2"
        >
        <News/>
        </v-col>
        <v-col
          :cols=12
          dense
          class="pa-2"
        >
        <News/>
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
