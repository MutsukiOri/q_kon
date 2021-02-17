<template>
    <v-card
    class="pb-2">
    <v-img
        v-bind:src="imgPath"
        class="white--text justify-space-around"
        gradient="to bottom, rgba(10,0,0,.1), rgba(0,0,0,.5)"
        height="450"
    >
        <v-card-title v-text="title"></v-card-title>
        <v-container>
            <v-card>
            <v-virtual-scroll
            :bench="benched"
            :items="items"
            height="300"
            item-height="64"
            color='primary'
            >
            <template v-slot:default="{ item }">
                <v-list-item :key="item">
                    <v-list-item-content>
                        <v-list-item-title>
                            User Database Record <strong>ID {{ item }}</strong>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
            </template>
            </v-virtual-scroll>
            </v-card>
        </v-container>
    </v-img>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
        imgPath: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        title: 'お知らせ',
        benched: 0,
    }),
    computed: {
      items () {
        return Array.from({ length: this.length }, (k, v) => v + 1)
      },
      length () {
        return 70
      },
    },
  }
</script>