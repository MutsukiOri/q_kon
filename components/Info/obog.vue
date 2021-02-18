<template>
    <v-card>
    <v-img
        v-bind:src="imgPath"
        class="white--text align-center"
        gradient="to bottom, rgba(10,0,0,1), rgba(0,0,0,.5)"
    >
        <v-container>
        <v-card-title v-text="title"></v-card-title>
        <v-card-text>
            <v-card
            color='rgba(0, 0, 0, 0)'
            dark
            flat>
                <v-card-title>日頃の感謝</v-card-title>
                <v-card-text v-text="thanks"></v-card-text>
            </v-card>
            <v-card
            color='rgba(0, 0, 0, 0)'
            dark
            flat>
                <v-card-title>OB•OG交流会</v-card-title>
                <v-card-text v-text="exchange"></v-card-text>
            </v-card>
            <v-card
            color='rgba(0, 0, 0, 0)'
            dark
            flat>
                <v-card
                color='rgba(0, 0, 0, 0)'
                dark
                flat>
                    <v-card-title>変更の届け出</v-card-title>
                    <v-card-text v-text="address"></v-card-text>
                    <v-card-text v-text="mail"></v-card-text>
                </v-card>
            </v-card>
        </v-card-text>
        </v-container>
    </v-img>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
        imgPath: 'https://pbs.twimg.com/media/EqnNsO2UwAEntH4?format=jpg',
        title: 'OB•OGの皆様へ',
        thanks: `日頃より九混に多大なるご支援とご協力、誠にありがとうございます。
これからも九混は皆様と共に成長を続けて参ります。
どうぞよろしくお願いいたします。
                ※大学の長期休暇期間は、いずれの日も10:00〜12:30になります`,
        exchange:`　九大混声合唱団では、年に2回OB･OGの方々をお招きしてOB･OG交流会を行っております。
愛唱歌集の懐かしの曲を九混の仲間たちとともに歌い、楽しいひとときを過ごしていただければと思います。`,
        address: `声友会誌を紙でお受け取りの方で、引越しなどで住所を変更されました方は
q_kon_renraku@yahoo.co.jp
までご連絡ください。`,
        mail: `声友会誌をメールでお受け取りの方で、お受け取りになるメールアドレスを変更されたい方はお問い合わせフォームよりご連絡ください。`,
    }),
  }
</script>