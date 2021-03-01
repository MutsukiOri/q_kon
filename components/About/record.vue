<template>
    <v-card
    class=" justify-center"
    id="record"
    >
    <v-img
        v-bind:src="imgPath"
        class="white--text align-start"
        gradient="to bottom, rgba(10,10,10,.6), rgba(20,20,10,.5)"
    >
    <v-container>
    <v-card-title>
        活動実績
    </v-card-title>
        <v-timeline
        dense
        reverse
        max-width="500px"
        >
            <v-timeline-item
            v-for="(year, index) in years" 
            :key="index"
            left
            
            >
            <template v-slot:icon>
                <v-avatar size='50px' color='indigo'>
                    {{year.name}}
                </v-avatar>
            </template>
            <v-card class="elevation-2" color="#F5917E lighten-2" >
                <v-card-text>
                    <v-card
                    outlined
                    tile
                    v-for="(record, index) in year.records" 
                    :key="index">
                        
                        <!-- <v-row
                        justify="center"
                        no-gutters>
                        <v-col cols="12" md="2" class="date">{{record.date}}</v-col>
                        <v-col cols="10" ><strong>{{ record.title }}</strong></v-col>
                        <v-col cols="8">{{record.place}}</v-col>
                        </v-row> -->
                        <v-card-title>{{record.title}}</v-card-title>
                        <v-card-subtitle>{{record.date}}  {{record.place}}</v-card-subtitle>
                        <!-- <v-card-text>{{record.place}}</v-card-text> -->
                    </v-card>
                    
                </v-card-text>
            </v-card>
            </v-timeline-item>
        </v-timeline>
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
