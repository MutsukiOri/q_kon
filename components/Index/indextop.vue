<template>
  <v-card>
    <v-img
        v-bind:src="imgPath"
        class="white--text align-center"
        gradient="to top, rgba(1,3,20,.3), rgba(1,3,20,.4)"
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
        imgPath: require('~/assets/images/2020shiiki.jpg'),
        title: '九大混声合唱団',
        text: `　九大混声合唱団（九混）は、九州大学を拠点に活動している混声合唱サークルです。昭和38年(1963年)2月に発足し、今まで57年の歴史を歩んできました。
　団員は九州大学の学生が主ですが、他大学や専門学校の学生も入団できます。 現在は中村学園大学、筑紫女学園大学の仲間がおり、約80人で活動しています。（2020年12月現在）`,
        buttonItems: [
          {
            title: ' お知らせ',
            icon: 'mdi-newspaper-variant-outline',
            target: '#news',
          },
          {
            title: ' 練習',
            icon: 'mdi-account-voice',
            target: '#plan',
          },
          {
            title: ' カレンダー',
            icon: 'mdi-calendar',
            target: '#calendar',
          },
        ],
    }
  }
  }
</script>