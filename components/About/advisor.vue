<template>
    <v-card>
        <v-container>
          <v-card-title>
            指導者紹介
        </v-card-title>
            <v-row>
            <v-col
                v-for="advisor in advisors"
                :key="advisor.name"
                dense
                cols="12"
                sm="4"
              >
            <v-hover
            v-slot="{ hover }"
            >
              <v-card
                :elevation="hover ? 10: 0"
                
                >
                    <v-img
                    :src="advisor.src"
                    :class="advisor.class" 
                    >
                    <v-card-title 
                    v-text="advisor.name">
                    </v-card-title>
                    </v-img>
              </v-card>
            </v-hover>
            </v-col>
          </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data() {
        return{
            advisors: [
                { name: '竹田享司 Takeda Kyoji', src: 'http://qkon-chorus.sakura.ne.jp/images/instructor/Takeda.jpg', class: "white--text align-end"},
                { name: '山口幸志 Yamaguchi Koji', src: 'http://qkon-chorus.sakura.ne.jp/images/instructor/Yamaguchi.jpg', class: "white--text align-end"},
                { name: '永石伸子 Nagaishi Nobuko', src: 'http://qkon-chorus.sakura.ne.jp/images/instructor/Nagaishi.jpg', class: "black--text align-end"}
            ]
        }
    }
}
</script>