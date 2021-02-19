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
        <Concert />
        </v-col>
        <v-col
          :cols=12
          dense
          class="pa-2"
          >
          <obog/>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import Top from '@/components/Info/infotop.vue';
import SNS from '@/components/Info/sns.vue';
import Concert from '@/components/Info/concert.vue';
import Obog from '../components/Info/obog.vue';
export default {
    components: {
        Top,
        SNS,
        Concert,
        Obog,
    }
}
</script>