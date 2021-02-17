<template>
    <v-card>
    <v-img
        v-bind:src="imgPath"
        class="white--text align-end"
        gradient="to bottom, rgba(111,300,220,.7), rgba(111,30,220,.1)"
        height="300"
    >
        <v-card-title v-text="title"></v-card-title>
        <v-card-text v-text="text"></v-card-text>
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

        　団員は九州大学の学生が主ですが、他大学や専門学校の学生も入団できます。 現在は中村学園大学、筑紫女学園大学の仲間がおり、約60人で活動しています。（2021年2月現在）`
      }
    }
  }
</script>