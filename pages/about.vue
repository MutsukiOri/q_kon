<template>
  <v-container fluid>
    <v-row>
      <v-col
      :cols=12
      class="pb-0"
      >
      <Top/>
      </v-col>
      <v-col
      :cols=12
      class="pb-0"
      >
      <Record/>
      </v-col>

      <v-col
      :cols=12
      class=""
      >
      <Advisor/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import Group from "@/components/About/group.vue";
    import Record from "@/components/About/record.vue";
    import Member from "@/components/About/member.vue";
    import Advisor from "@/components/About/advisor.vue"
    import Top from '../components/About/abouttop.vue';
    export default {
        components: {
            Group,
            Record,
            Member,
            Advisor,
                Top,
        },
        data () {
    return {
      menuItems: [
      {
        name: '九混について',
        url: '#group'
      },
      {
        name: '活動実績',
        url: '#record'
      },
      {
        name: '団員紹介',
        url: '#member'
      },
      {
        name: '音楽顧問',
        url: '#advisor'
      }
    ]
    }
  }
  };

</script>