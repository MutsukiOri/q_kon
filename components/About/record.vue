<template>
    <v-card
    tile
    class=" justify-center"
    id="record"
    >
    <v-img
        v-bind:src="imgPath"
        class="white--text align-start"
        gradient="to bottom, rgba(210,213,236,1), rgba(210,213,236,.4)"
    >
    <v-container>
    <v-card-title style="color:#63676b;">
        活動実績
    </v-card-title>
    <v-sheet
    rounded
    id="scrolling-techniques"
    class="overflow-y-auto mb-6"
    height="600px"
    color="rgba(0,0,0,0)">
        <v-container>
        <v-timeline
        >
            <!-- <v-timeline-item
            v-for="(year, index) in years" 
            :key="index"
            small
            color='#d4b572'
            > -->
            <!-- <template v-slot:opposite>
                
                    {{year.name}}

            </template> -->
            <v-card v-for="(year, index) in years" 
            :key="index" 
            dark 
            flat
            class="ma-6" 
            color='#63676b'>
                <v-card-title style="color:#d2d5ec;" class="pl-10">
                    {{year.name}}
                </v-card-title>
                <v-card-text>
                    <v-card
                    outlined
                    dark
                    tile
                    color="#d2d5ec"
                    class="mb-2"
                    v-for="(record, index) in year.records" 
                    :key="index">
                        
                        
                        <v-card-title style="white-space:pre-wrap; word-wrap:break-word; color:#63676b;">{{record.title}}</v-card-title>
                        <v-card-subtitle style="color:#63676b">{{record.date}}  {{record.place}}</v-card-subtitle>
                        
                    </v-card>
                    
                </v-card-text>
            </v-card>
            <!-- </v-timeline-item> -->
        </v-timeline>
        </v-container>
    </v-sheet>
    </v-container>
    </v-img>
  </v-card>
</template>

<script>
import Records from './records'
export default {
    data () {
      return {
          years: Records.years,
          imgPath: 'https://picsum.photos/1920/1080?random',
        }
    }
}
</script>
