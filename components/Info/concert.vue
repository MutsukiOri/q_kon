<template>
  <v-card>
    <v-img
    v-bind:src="imgPath"
    class="white--text"
    gradient="to bottom, rgba(10,0,0,1), rgba(0,0,0,.5)">
    <v-container>
      <v-card-title>
        定期演奏会情報
      </v-card-title>
      <v-row>
        <v-col
        v-for="concert in concerts"
        :key="concert.name"
        dense
        cols="12"
        sm="6"
        lg="4"
        >
          <v-expansion-panels
          hover
          focusable>
            <v-expansion-panel 
            color="black">
              <v-expansion-panel-header>
                  <v-img
          :src="concert.src"
          >
          </v-img>
              </v-expansion-panel-header>
              <v-expansion-panel-content style="white-space:pre-wrap; word-wrap:break-word;">
                <strong >{{ concert.role }}</strong>{{concert.more}}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
    </v-img>
  </v-card>
</template>

<script>
export default {
    data() {
        return{
            imgPath: 'https://pbs.twimg.com/media/EqnNsO2UwAEntH4?format=jpg',
            concerts: [
                { 
                  name: '竹田享司 Takeda Kyoji',
                  src: 'http://qkon-chorus.sakura.ne.jp/images/concert/2019concertfront.jpg',
                  role: `指揮者／音楽・技術顧問`,
                  more:`
　九州芸術工科大学（現在の九州大学芸術工学部）音響設計学科を卒業。
　音楽学を故柴田南雄氏に、声楽を緒方敏郎氏に師事。指揮法を本山秀樹氏に師事。
　大学卒業後、勤務先のサークルであるパナソニック合唱団にて副指揮者を務め、広島学生合唱連盟合同演奏会の客演指揮者として招かれたのを機に、合唱指揮活動を開始。合唱団クェーサーの指揮者として、全日本合唱コンクール全国大会に連続出場し、上位入賞を果たす。
　九大混声合唱団の指揮者として招かれた初年度に、九州合唱コンクールで九混を1位金賞へと導く。その後、通算15回の全国大会出場と全国金賞等、多数の受賞を果たしている。
　現在、九大混声合唱団を始め、合唱団コール・フェスタ、西南女学院大学クール・ベルフィーコで指揮者として活動。主に学生の合唱活動に積極的に支援を行っている。
　日本合唱指揮者協会会員、平成指揮者十人の会同人、合唱連盟北九州支部理事。`

                },
                {
                  name: '山口幸志 Yamaguchi Koji',
                  src: 'http://qkon-chorus.sakura.ne.jp/images/concert/2018concertfront.jpg',
                  role: `ヴォイストレーナー/テノール`,
                  more: `
　東京工業大学大学院修了。
　1998年より声楽を福嶋敬晃氏に師事。2001年より北九州シティオペラに所属し、 「ナブッコ」「トスカ」「仮面舞踏会」「椿姫」「コジ・ファン・トゥッテ」「アイーダ」等のオペラや、ガラコンサートに出演。その他、第九のソリスト、各種コンサートヘの出演等、北九州・山口を中心に音楽活動を行っている。
　第49回西日本新人紹介演奏会西日本新聞社賞受賞。第24回飯塚新人音楽コンクール入選。
　北九州シティオペラ理事。北九州市在住。`
                },

                {
                  name: '永石伸子 Nagaishi Nobuko',
                  src: 'http://qkon-chorus.sakura.ne.jp/images/concert/2017concert.png',
                  role: `ヴォイストレーナー/ソプラノ`,
                  more: `
　ルチアノ・ベルタニョリオ氏に師事。
　地元演奏会多数出演。2010年アルカスSASEBO開館10周年記念オペラ「秘密の結婚」カロリーナ役で出演。福岡では2000年~2012年までカントイタリアーノ演奏会出演。2012年福岡で初リサイタルを開催。
　2013年からCANTIAMO INSIEME演奏会に広島・福岡で出演。現在、コーロ・エテルノ指揮者、佐世保・福岡において演奏活動他、合唱団等のヴォイストレーナー、及び後進の指導を行っている。
　佐世保市音楽協会会員。佐世保出身。`
                  }
            ]
        }
    }
}
</script>