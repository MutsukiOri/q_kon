<template>
    <v-card
    pb-2>
    <v-img
        v-bind:src="imgPath"
        class="white--text justify-space-around"
        gradient="to bottom, rgba(10,0,0,.1), rgba(0,0,0,.5)"
        height="250"
    >
        <v-card-title v-text="title"></v-card-title>
        <v-card-text>

        <strong>練習時間</strong>
        <v-card-text v-text="time"></v-card-text>
        <strong>練習場所</strong>
        <v-card-text v-text="place"></v-card-text>

        </v-card-text>
        <v-container>
        </v-container>
    </v-img>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
        imgPath: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        title: '練習について',
        time: `　基本的に週3回(火、木、土)
                火曜日・木曜日：18:30〜20:30、土曜日：10:00〜12:30
                ※大学の長期休暇期間は、いずれの日も10:00〜12:30になります`,
        place:`　九大伊都キャンパス内のセンターゾーン教室、ウエストゾーン課外活動施設II、椎木講堂、修猷館高校同窓会館（西新）など。
                現在はZoomを利用し、音とりなどをしています。`,
    }),
  }
</script>