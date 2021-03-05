<template>
  <v-card>
    <v-img
        v-bind:src="imgPath"
        class="white--text align-center"
        gradient="to bottom, rgba(111,30,220,.1), rgba(1,3,20,.7)"
        height="400"
      >
      <v-container>
        <v-card-title v-text="title"></v-card-title>
        <v-card-text
        style="white-space:pre-wrap; word-wrap:break-word;"
        v-text="text">
        </v-card-text>
        <v-row>
          <v-col cols="12"></v-col>
          <v-col
          align="center"
          justify="space-around"
          v-for="(buttonItem, index) in buttonItems" 
          :key=index
          >
            <v-btn
            rounded
            
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
        imgPath: require('~/assets/images/2020boy.jpg'),
        title: 'About',
        text: `九混ってどんなの？`,
        buttonItems: [
          {
            title: '活動実績',
            icon: 'mdi-history',
            target: '#record',
          },
          // {
          //   title: '団員紹介',
          //   icon: 'mdi-card-account-details-outline',
          //   target: '#member',
          // },
          {
            title: '指導者紹介',
            icon: 'mdi-account-check-outline',
            target: '#advisor',
          },
        ],
    }
  }
  }
</script>