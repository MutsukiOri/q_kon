<template>
    <v-col
        dense
        cols="12"
        sm="6"
        lg="4"
        >
        <v-dialog
        v-model="dialog"
        fullscreen
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
                    v-bind:src="src"
                    class="white--text align-end"
                    >
                    </v-img>
                </v-card>
            </template>

          <v-card class="overflow-hidden">
            <v-app-bar
            dark
            elevate-on-scroll
            scroll-target="#scrolling-techniques"
            color="#F5917E"
            >
              <v-app-bar-title class="justify-center">第55回九大混声合唱団定期演奏会</v-app-bar-title>
              <v-spacer></v-spacer>
              <v-btn
                icon
                dark
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-app-bar>
            <v-sheet
            tile
            id="scrolling-techniques"
            class="overflow-y-auto"
            :max-height=height
            >
                <v-container style="background-color:white;">
                    <div class="h30">
                    <p class="font-weight-bold mb-1">&#9835;第55回九大混声合唱団定期演奏会</p>
                    <p class="mb-2">
                        2018/12/16(日)に九大伊都キャンパス椎木講堂にて九大混声合唱団第55回記念定期演奏会を開催いたしました。<br>
                        会場のアクセスが良くなく、人が来ないのではと団員一同相当な不安の中で当日を迎えましたが、お足元の悪い中1200名近くのお客様にご来場いただき、想像以上の大盛況の演奏会となりました。<br>
                        ご来場いただいた皆様、誠にありがとうございました！<br>
                        Youtubeの九混チャンネルに『<a href="https://www.youtube.com/watch?v=WOEX2e-D4N8"
                            target=”_blank”>夢をかなえてドラえもん</a>』『<a href="https://www.youtube.com/watch?v=-EkrBW5Q6gg"
                            target=”_blank”>AgnusDei=空海・真言・絶唱</a>』『<a
                            href="https://www.youtube.com/watch?v=KZPPJ25JM5I" target=”_blank”>恋に落ちて -Fall in
                            love-</a>』『<a href="https://www.youtube.com/watch?v=ytenT-lrnec"
                            target=”_blank”>信じる</a>』の演奏をアップしておりますのでどうぞお楽しみください。
                    </p>
                    <div class="row">
                        <div class="col-12 col-md-6 mb-2">
                            <img class="img-fluid" :src=src
                                alt="第55回九大混声合唱団定期演奏会ポスター表">
                        </div>
                        <div class="col">
                            <p class="font-weight-bold">第１ステージ　忘れていた忘れられない夢</p>
                            <ul>
                                <li>夢をかなえてドラえもん</li>
                                <li>少年期</li>
                                <li>ボクノート</li>
                            </ul>
                            <p class="font-weight-bold">第２ステージ　コンクール2018</p>
                            <ul>
                                <li>Chor der Engel</li>
                                <li>混声合唱のためのAgnusDei=空海・真言・絶唱</li>
                            </ul>
                            <p class="font-weight-bold">第３ステージ　OBOG合同ステージ 〜ラブソング・コーラス〜</p>
                            <ul>
                                <li>糸</li>
                                <li>心が愛にふるえるとき</li>
                                <li>恋に落ちて -Fall in love-</li>
                                <li>How do I love you?</li>
                            </ul>
                            <p class="font-weight-bold">第４ステージ　混声合唱とピアノのための「信じる」</p>
                            <ul>
                                <li>ふるさとの星</li>
                                <li>繰り返す</li>
                                <li>泣けばいい</li>
                                <li>信じる</li>
                            </ul>
                            <p class="font-weight-bold">松下耕作曲　委嘱作品初演</p>
                            <ul>
                                <li>すこやかに</li>
                            </ul>
                            <p class="font-weight-bold">アンコール</p>
                            <ul>
                                <li>TSUNAMI</li>
                                <li>永遠の花</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </v-container>
            </v-sheet>
          </v-card>
        </v-dialog>
    </v-col>
        
</template>

<script>
export default {
    data () {
        return {
            src: require('~/assets/images/concert/2018concertfront.jpg'),
            dialog: false,
        }
    },
    created () {
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed () {
    if (process.client) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize () {
      this.height = window.innerHeight - 60
    }
  }
}
</script>