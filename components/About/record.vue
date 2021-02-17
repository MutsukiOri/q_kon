<template>
    <v-card
    class="pb-2 justify-center">
    <v-card-title>
        活動実績
    </v-card-title>
        <v-timeline>
            <v-timeline-item
            v-for="(year, index) in years" 
            :key="index"
            large
            >
            <template v-slot:icon>
                <v-avatar>
                <img src="http://i.pravatar.cc/66">
                </v-avatar>
            </template>
            <template v-slot:opposite>
                <span>{{year.name}}</span>
            </template>
            <v-card class="elevation-2" >
                <v-card-text v-for="(record, index) in year.records" :key="index">
                    <span class="date">{{record.date}}</span>
                    <span>{{ record.title }}</span>
                    <div class="place">{{record.place}}</div>
                    </v-card-text>
            </v-card>
            </v-timeline-item>
        </v-timeline>
  </v-card>
</template>

<script>
import Records from './records'
export default {
    data () {
      return {
          years: Records.years
        }
    }
}
</script>
<style scoped>


.art {
    padding-top: 15px;
    white-space: pre-line;
    /* background-color: silver; */
    /* margin-bottom: 10px; */
}
span {
    padding-left: 10px;
}
.summary {
    font-weight: bold;
}

.date {
    font-size: 14px;
}
.place {
    font-size: 14px;
    text-align: center;
}
</style>