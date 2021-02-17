<template>
    <v-card>
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
    data: () => ({
      cards: [
        { title: 'ソプラノ', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 8 },
        { title: 'アルト', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        { title: 'テノール', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
        { title: 'ベース', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 8 },
      ],
    }),
  }
</script>