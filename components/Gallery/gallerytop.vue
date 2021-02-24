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
        imgPath: '/images/shiiki_from_stage.jpg',
        title: 'Gallery',
        text: `足跡`,
        buttonItems: [
          {
            title: '令和2年度',
            icon: 'mdi-account-check-outline',
            target: '#R2',
          },
          {
            title: '令和元年',
            icon: 'mdi-card-account-details-outline',
            target: '#R1',
          },
          {
            title: '平成30年度',
            icon: 'mdi-account-check-outline',
            target: '#H30',
          },
        ],
    }
  }
  }
</script>