<template>
  <v-card id="concert">
    <v-img
    v-bind:src="imgPath"
    class="white--text align-center"
    gradient="to bottom, rgba(10,0,0,.9), rgba(0,0,0,.3)">
    <v-container>
      <v-card-title>
        定期演奏会情報
      </v-card-title>
      <v-card-text>
        詳細情報は画像をクリックorタップ
      </v-card-text>
      <v-row>
        <R1/>
        <H30/>
        <H29/>
      </v-row>
    </v-container>
    </v-img>
  </v-card>
</template>

<script>
import R1 from '../contents/Info/concerts/R1.vue'
import H30 from '../contents/Info/concerts/H30.vue'
import H29 from '../contents/Info/concerts/H29.vue'
export default {
  components: {
    R1,
    H30,
    H29,
  },
    data() {
        return{
            imgPath: 'https://pbs.twimg.com/media/EqnNsO2UwAEntH4?format=jpg',
            concerts: [
                { 
                  dialog: false,
                  src: require('~/assets/images/concert/2019concertfront.jpg'),
                  title: `第56回九大混声合唱団定期演奏会`,
                },
                {
                  dialog: false,
                  src: require('~/assets/images/concert/2018concertfront.jpg'),
                  title: `第55回九大混声合唱団定期演奏会`,
                },

                {
                  dialog: false,
                  src: require('~/assets/images/concert/2017concert.png'),
                  title: `第54回九大混声合唱団定期演奏会`,
                  }
            ]
        }
    }
}
</script>