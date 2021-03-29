<template>
    <v-col
        dense
        cols="12"
        sm="6"
        lg="4"
        >
        <v-dialog
        v-model="dialog"
        hide-overlay
        >
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
              <v-btn
                icon
                dark
                small
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-spacer/>
              <v-toolbar-title class="justify-center">第56回九大混声合唱団定期演奏会</v-toolbar-title>
              <v-spacer/>
              
            </v-app-bar>
            <v-sheet
            tile
            id="scrolling-techniques"
            class="overflow-y-auto"
            height="500px"
            >
                <v-container style="background-color:white;">
                    <div class="r1">
                        <p class="font-weight-bold mb-1">&#9835;第56回九大混声合唱団定期演奏会</p>
                        <p class="mb-2">
                            2019/12/15(日)にアクロス福岡シンフォニーホールにて九大混声合唱団第56回定期演奏会を開催いたしました。<br>
                            1000名以上のお客様にご来場いただき、大変華やかで楽しい演奏会となりました。<br>
                            ご来場いただいた皆様、誠にありがとうございました！<br>
                            Youtubeの九混チャンネルに『<a href="https://youtu.be/1aicyIVCR50"
                                target=”_blank”>君をのせて</a>』『<a href="https://youtu.be/94ieiuTAaTE"
                                target=”_blank”>Sogno di Volare</a>』『<a href="https://youtu.be/iLwpPNjR5Ws"
                                target=”_blank”>あめ・樹木</a>』の演奏をアップしておりますのでどうぞお楽しみください。
                        </p>
                        <div class="row">
                            <div class="col-12 col-md-6 mb-2">
                                <img class="img-fluid" :src=src
                                    alt="第56回九大混声合唱団定期演奏会ポスター表">
                            </div>
                            <div class="col">
                                <p class="font-weight-bold">第１ステージ　世代を越えたメッセージ</p>
                                <ul>
                                    <li>となりのトトロ</li>
                                    <li>やさしさに包まれたなら</li>
                                    <li>めぐる季節</li>
                                    <li>君をのせて</li>
                                </ul>
                                <p class="font-weight-bold">第２ステージ　コンクール参加曲</p>
                                <ul>
                                    <li>蜂が一ぴき…</li>
                                    <li>[委嘱作品]混声合唱とピアノのための あめ・樹木（作曲：信長貴富）</li>
                                </ul>
                                <p class="font-weight-bold">第３ステージ　海外の現代合唱曲アラカルト</p>
                                <ul>
                                    <li>Ave Generosa</li>
                                    <li>We Will Rock You</li>
                                    <li>I am not yours</li>
                                    <li>Sogno di Volare</li>
                                </ul>
                                <p class="font-weight-bold">第４ステージ　混声合唱組曲「いのちのうた」</p>
                                <ul>
                                    <li>誕生</li>
                                    <li>あの感じ</li>
                                    <li>負けるな</li>
                                    <li>遠くへ行こう</li>
                                    <li>いのちのうた</li>
                                </ul>
                                <p class="font-weight-bold">アンコール</p>
                                <ul>
                                    <li>わが叙情詩</li>
                                    <li>波へ</li>
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
            src: require('~/assets/images/concert/2019concertfront.jpg'),
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