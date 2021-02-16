<template>
  <v-container>
    <v-card>
      <v-toolbar
        flat
        color="primary"
        dark
      >
        <v-toolbar-title>About</v-toolbar-title>
      </v-toolbar>
      <v-tabs horizontal>
        <v-tab>
          <v-icon left>
            mdi-account
          </v-icon>
          九混
        </v-tab>
        <v-tab>
          <v-icon left>
            mdi-lock
          </v-icon>
          活動実績
        </v-tab>
        <v-tab>
          <v-icon left>
            mdi-access-point
          </v-icon>
          団員紹介
        </v-tab>
        <v-tab>
          <v-icon left>
            mdi-access-point
          </v-icon>
          指導者紹介
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <Group />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <Record />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <Member />
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <Advisor />
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>
        <!-- <Group id="group"/>
        <Record id="record"/>
        <Member id="member"/>
        <Advisor id="advisor"/> -->

<script>
    import Group from "@/components/About/group.vue";
    import Record from "@/components/About/record.vue";
    import Member from "@/components/About/member.vue";
    import Advisor from "@/components/About/advisor.vue"
    export default {
        components: {
            Group,
            Record,
            Member,
            Advisor
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

<style scoped>
.container {
    margin: 0 auto;
    min-height: 100vh;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    text-align: left;
    background-color: whitesmoke;
    border-radius: 20px;
    /* padding-top: 15px; */
}

ol {
  /* margin-top: -100px; */
  margin-left: 0%;
  /* width: 0.1el; */
  /* display:flex; */
  list-style: none;
  position: fixed;
  /* background-color: yellowgreen; */
  /* padding-left: 100px; */
  /* opacity: 0.5; */
  right: 10px;
  bottom: 40px;
}

li {
  width: 100px;
  height: 40px;
  margin-bottom: 1px;
  font-size: 17px;
  text-align: center;
  position: relative;
  background-color: skyblue;
  border-radius: 100px;
  transition: 1s;
  opacity: 0.85;
}

li :hover {
    background-color: gray;
    border-radius: 100px;
    /* opacity: 0.7; */
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  /* top: 0; */
  width: 100%;
  height: 100%;
  color: black;
  text-decoration: none;
  line-height: 40px;
  transition: 0.5s;
}

a:hover {
  color: rgb(242, 242, 247);
}
</style>