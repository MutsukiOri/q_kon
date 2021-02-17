<template>
  <v-card>
    <v-img
    v-bind:src="imgPath"
    class="white--text"
    >
    <v-container fluid>
      <v-card-title>
        九混SNS
      </v-card-title>
      <v-row>
        <v-col
        dense
        class="pl-2 pr-2"
        cols="12"
        sm="6"
        md="4"
        max-height="600px">
          <v-card>
            <Timeline :id="user_id" source-type="profile" :options="{ height: '600' }"/>
          </v-card>
        </v-col>
        <v-col
        dense
        class="pl-2 pr-2"
        cols="12"
        sm="6"
        md="4"
        max-height="600px">
          <v-card>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-img>
  </v-card>
</template>

<script>
import { Timeline } from "vue-tweet-embed";
// import {VueInstagram} from "vue-instagram"

export default {
  components: {
    Timeline,
    // VueInstagram
  },
  data: function(){
    return {
      user_id: "Qkon_chorus",
      imgPath: 'https://picsum.photos/1920/1080?random',
  }
  }
}
</script>