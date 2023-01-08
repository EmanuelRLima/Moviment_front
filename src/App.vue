<template>
  <div>
    <div
      v-show="layout === 'landing'"
      class="landing-bg h-100 bg-gradient-primary position-fixed w-100"
    ></div>

    <sidenav v-if="showSidenav && this.fulltela == false" />

    <main class="main-content position-relative max-height-vh-100 h-100">
      <navbar v-if="showNavbar && this.fulltela == false" />

      <router-view />
    </main>
  </div>
</template>
<script>
//import { AxiosAPI } from "@/axios";
import Sidenav from "../src/components/Sidenav/index.vue";
import Navbar from "../src/components/Navbars/Navbar.vue";
import { mapState } from "vuex";

//import {  GChart  } from 'vue-google-charts';

export default {
  name: "App",
  data() {
    return {
      fulltela: false,
      users: {},
      session_id: 0,
      session_status: 0,
      quorum_obj: [],
      tribuna_id: 0,
      status_login: null, 
    };
  },
  components: {
   // GChart,
    Sidenav,
    Navbar,
    //AppFooter
  },
  computed: {
    ...mapState([
      "layout",
      "showSidenav",
      "showNavbar",
      "showFooter",
      "showConfig",
      "hideConfigButton",
    ]),
  },
  mounted() {

    this.RefreshToken();


  },
  methods: {
    RefreshToken(){this.$store.dispatch('RefreshToken')},
    

  },
};
</script>
