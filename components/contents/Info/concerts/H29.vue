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
              <v-btn
                icon
                dark
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-spacer/>
              <v-toolbar-title class="justify-center">第54回九大混声合唱団定期演奏会</v-toolbar-title>
              <v-spacer/>
              
            </v-app-bar>
            <v-sheet
            tile
            id="scrolling-techniques"
            class="overflow-y-auto"
            height="500px"
            >
                <v-container style="background-color:white;">
                    <div class="h29">
                        <p class="font-weight-bold mb-1">&#9834;第54回九大混声合唱団定期演奏会</p>
                        <p class="mb-2">
                            2017/12/17(日)にアクロス福岡シンフォニーホールにて定期演奏会が行われました。<br>
                            1369人ものお客様にご来場いただき大盛況のうちに終演いたしました。<br>
                            ご来場された皆様、ありがとうございました！<br>
                            Youtubeの九混チャンネルに『<a href="https://www.youtube.com/watch?v=C_redXjd8h8"
                                target=”_blank”>麦の唄</a>』『<a href="https://www.youtube.com/watch?v=j97T3ELhjw0"
                                target=”_blank”>春と修羅Ⅱ</a>』『<a href="https://www.youtube.com/watch?v=X63oMKclyjM"
                                target=”_blank”>瑠璃色の地球</a>』の演奏をアップしておりますのでどうぞお楽しみください。
                        </p>
                        <div class="row">
                            <div class="col-12 col-md-6 mb-2">
                                <img class="img-fluid" :src=src
                                    alt="第54回九大混声合唱団定期演奏会ポスター表">
                            </div>
                            <div class="col">
                                <p class="font-weight-bold">第１ステージ　朝ドラ！</p>
                                <ul>
                                    <li>あまちゃんオープニングテーマ</li>
                                    <li>麦の唄</li>
                                    <li>希空</li>
                                    <li>３６５日の紙飛行機</li>
                                </ul>
                                <p class="font-weight-bold">第２ステージ　コンクールステージ</p>
                                <ul>
                                    <li>子どもは…</li>
                                    <li>混声合唱とピアノのための『春と修羅』よりⅡ</li>
                                </ul>
                                <p class="font-weight-bold">第３ステージ　X'mas Song Stage</p>
                                <ul>
                                    <li>赤鼻のトナカイ</li>
                                    <li>I Saw Mammy Kissing Santa Claus</li>
                                    <li>Amazing Grace</li>
                                    <li>Happy Xmas</li>
                                    <li>恋人がサンタクロース</li>
                                </ul>
                                <p class="font-weight-bold">混声合唱のための『どちりなきりしたん』</p>
                                <p class="font-weight-bold">アンコール</p>
                                <ul>
                                    <li>瑠璃色の地球</li>
                                    <li>Baba Yetu</li>
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
            src: require('~/assets/images/concert/2017concert.png'),
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