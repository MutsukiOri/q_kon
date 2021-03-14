<template>
    <v-container fluid >
      <v-row>
        <v-col
          :cols=12
          dense
          class="pb-0"
        >
        <Top/>
        </v-col>
        <v-col
          :cols=12
          dense
          class="pb-0"
        >
        <News/>
        </v-col>
        <v-col
          :cols=12
          dense
          class="pb-0"
        >
        <Plan/>
        </v-col>
        <v-col
          :cols=12
          dense
          class=""
        >
        <Schedule/>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  import Top from '@/components/Index/indextop.vue';
  import News from '@/components/Index/news.vue';
  import Plan from '@/components/Index/plan.vue';
  import Schedule from '@/components/Index/schedule.vue';
  export default {
    components: {
      Top,
      News,
      Plan,
      Schedule
    },
  }
</script>

<style scoped>


</style>
