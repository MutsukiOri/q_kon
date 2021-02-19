<template>
  <v-card id="member">
    <v-container>
      <v-card-title>
        団員紹介
      </v-card-title>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card"
          class="d-flex child-flex"
          cols="12"
          md="6"
          lg="3"
        >
          <v-img
            :src=card.src
            :lazy-src=card.src
            
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'ソプラノ', src: require('~/assets/member/sop2019.jpg') },
        { title: 'アルト', src: require('~/assets/member/alt2019.jpg') },
        { title: 'テノール', src: require('~/assets/member/tenor2019.jpg') },
        { title: 'ベース', src: require('~/assets/member/bass2019.jpg') },
      ],
    }),
  }
</script>