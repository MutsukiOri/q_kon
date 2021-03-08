<template>
  <v-card>
    <v-img
        v-bind:src="imgPath"
        class="white--text align-center"
        gradient="to top, rgba(111,30,220,.1), rgba(1,3,20,.7)"
        height="400"
      >
      <v-container>
        <v-card-title v-text="title"></v-card-title>
        <v-card-text
        style="white-space:pre-wrap; word-wrap:break-word;"
        v-text="text">
        </v-card-text>
        <v-row><!-- 位置調整 -->
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col
          align="center"
          justify="space-around"
          v-for="(buttonItem, index) in buttonItems" 
          :key=index
          >
            <v-btn
            rounded
            outlined
            color="white"
            v-scroll-to=buttonItem.target
            >
              <v-icon>{{ buttonItem.icon }}</v-icon>
              {{ buttonItem.title }}
            </v-btn>
          </v-col>
        </v-row>

      </v-container>
    </v-img>
  </v-card>
</template>

<script>
  export default {
    data(){
      return {
        imgPath: require('~/assets/images/2020girl.jpg'),
        title: 'Information',
        text: `毎年、全国大会出場に向けて日々練習を重ねています。定期演奏会やジョイントコンサートなど発表の機会があれば良いのですが今年はどうなることやら。気になる方はsnsで最新情報をCHECK!!!`,
        buttonItems: [
          {
            title: '九混SNS',
            icon: 'mdi-twitter',
            target: '#sns',
          },
          {
            title: '定期演奏会',
            icon: 'mdi-account-voice',
            target: '#concert',
          },
          {
            title: 'OB•OG',
            icon: 'mdi-account-supervisor-outline',
            target: '#obog',
          },
        ],
    }
  },
    computed: {
      target() {
        return this.selections
      }
    }
  }
</script>