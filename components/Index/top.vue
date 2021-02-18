<template>
  <v-card>
    <v-img
        v-bind:src="imgPath"
        class="white--text align-end"
        gradient="to bottom, rgba(111,30,220,.1), rgba(1,3,20,.7)"
        height="400"
      >
      <v-container>
        <v-row>
          <v-col
          align="center"
          justify="space-around"
          v-for="(buttonItem, index) in buttonItems" 
          :key=index
          cols="4">
            <v-btn
            outlined
            color="white"
            v-scroll-to=buttonItem.target
            >
              <v-icon>{{ buttonItem.icon }}</v-icon>
              {{ buttonItem.title }}
            </v-btn>
          </v-col>
        </v-row>
        <v-card-title v-text="title"></v-card-title>
        <v-card-text
        style="white-space:pre-wrap; word-wrap:break-word;"
        v-text="text">
        </v-card-text>
      </v-container>
    </v-img>
  </v-card>
</template>

<script>
  export default {
    data(){
      return {
        imgPath: 'https://picsum.photos/1920/1080?random',
        title: '九大混声合唱団',
        text: `　九大混声合唱団（九混）は、九州大学を拠点に活動している混声合唱サークルです。昭和38年(1963年)2月に発足し、今まで56年の歴史を歩んできました。
　団員は九州大学の学生が主ですが、他大学や専門学校の学生も入団できます。 現在は中村学園大学、筑紫女学園大学の仲間がおり、約60人で活動しています。（2021年2月現在）`,
        buttonItems: [
          {
            title: ' お知らせ',
            icon: 'mdi-at',
            target: '#news',
          },
          {
            title: ' 練習について',
            icon: 'mdi-account-voice',
            target: '#plan',
          },
          {
            title: ' カレンダー',
            icon: 'mdi-calendar',
            target: '#calendar',
          },
        ],
        selections: '#first',
    }
  },
    computed: {
      target() {
        return this.selections
      }
    }
  }
</script>