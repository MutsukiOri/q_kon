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
        <SNS/>
        </v-col>
        <v-col
          :cols=12
          dense
          class="pa-2"
        >
        
        </v-col>
        <v-col
          :cols=12
          dense
          class="pa-2"
        >
        
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import Top from '@/components/top.vue';
import SNS from '@/components/Info/sns.vue'
export default {
    components: {
        Top,
        SNS
    }
}
</script>