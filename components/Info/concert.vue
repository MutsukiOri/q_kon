<template>
  <v-card id="concert">
    <v-img
    v-bind:src="imgPath"
    class="white--text align-center"
    gradient="to bottom, rgba(10,0,0,.9), rgba(0,0,0,.8)">
    <v-container>
      <v-card-title>
        定期演奏会情報
      </v-card-title>
      <v-row>
        <v-col
        v-for="concert in concerts"
        :key="concert.title"
        dense
        cols="12"
        sm="6"
        lg="4"
        >
          <v-dialog
          v-model="concert.dialog"
          width="100%"
          hide-overlay
          transition-group="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
            <v-card
              tile
              dark
              v-bind="attrs"
              v-on="on"
            >
              <v-img
              v-bind:src="concert.src"
              class="white--text align-end"
              >
              </v-img>
            </v-card>
          </template>

          <v-card>
            <v-app-bar
            dark
            scroll-target="#scrolling-techniques"
            color="#F5917E"
            >
              <v-app-bar-title class="justify-center">{{concert.title}}</v-app-bar-title>
              <v-spacer></v-spacer>
              <v-btn
                icon
                dark
                @click="concert.dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
          
              
            </v-app-bar>
          
          
          <H30/>
          </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
    </v-img>
  </v-card>
</template>

<script>
import H30 from '@/components/Info/concerts/H30.vue'
export default {
  components: {
    H30,
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