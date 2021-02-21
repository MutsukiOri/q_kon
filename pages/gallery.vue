<template>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
          dense
          class="pl-2 pr-2"
        >
        <v-hover
        v-slot="{ hover }"
        >
          <v-card
          :elevation="hover ? 12 : 0">
            <v-img
              
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
              <a class="col-6 col-md-4" href="../assets/images/R1/10-1.jpg"><img class="img-thumbnail"
                                src="../assets/images/R2/10-1.jpg"></a>
            </v-img>
          </v-card>
        </v-hover>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: '令和2年度', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 8 },
        { title: '令和元年度', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        { title: '平成30年度', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
        { title: '平成30年度', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 8 },
        { title: '平成29年度', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: '平成28年度', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3 },
        { title: '平成27年度', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3 },
      ],
    }),
  }
</script>