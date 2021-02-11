<template>
    <div class="container" >
        
        <h5 class="title">活動実績</h5>
        <div class="art" v-for="(year, index) in years" :key="index">
            <h6 class="summary">{{ year.name }}</h6>
            <article v-for="(record, index) in year.records" :key="index">
                <div class="record">
                    <span class="date">{{record.date}}</span>
                    <span>{{ record.title }}</span>
                    <div class="place">{{record.place}}</div>
                </div>
            </article>
        </div>
    </div>
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