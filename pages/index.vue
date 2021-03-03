<template>
    <v-container fluid >
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
        <Plan/>
        </v-col>
        <v-col
          :cols=12
          dense
          class="pa-2"
        >
        <Calendar/>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  import Top from '@/components/Index/indextop.vue';
  import News from '@/components/Index/news.vue';
  import Plan from '@/components/Index/plan.vue';
  import Calendar from '@/components/Index/calendar.vue'
  export default {
    components: {
      Top,
      News,
      Plan,
      Calendar
    },
    data: () => ({

    }),
  }
</script>

<style scoped>


</style>
