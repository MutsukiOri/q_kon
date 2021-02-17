<template>
    <v-card>
    <v-img
        :src="imgPath"
        class="white--text align-start"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="600px"
    >
        <v-container>
            <v-card-title>
                カレンダー
            </v-card-title>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=bmVjZWQ4Zjc0MWFuNTcwOHRmb2o3Z25nZGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F4511E" style="border:solid 1px #777" width="100%" height="500" frameborder="0" scrolling="no"></iframe>
        </v-container>
        
    </v-img>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
        imgPath: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        title: '練習について',
        time: `　基本的に週3回(火、木、土)
                火曜日・木曜日：18:30〜20:30、土曜日：10:00〜12:30
                ※大学の長期休暇期間は、いずれの日も10:00〜12:30になります`,
        place:`　九大伊都キャンパス内のセンターゾーン教室、ウエストゾーン課外活動施設II、椎木講堂、修猷館高校同窓会館（西新）など。
                現在はZoomを利用し、音とりなどをしています。`,
    }),
  }
</script>