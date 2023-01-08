<template>
  <nav
    id="navbarBlur"
    :class="`${
      !isNavFixed
        ? 'navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none'
        : `navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none position-sticky ${
            darkMode ? 'bg-default' : 'bg-white'
          } left-auto top-2 z-index-sticky`
    } ${isRTL ? 'top-0 position-sticky z-index-sticky' : ''}`"
    v-bind="$attrs"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs
        :current-page="currentRouteName"
        :current-directory="currentDirectory"
      />
      <div
        class="sidenav-toggler sidenav-toggler-inner d-xl-block d-none"
        :class="isRTL ? 'me-3' : ''"
      >
        <a
          href="#"
          class="p-0 nav-link text-body"
          @click.prevent="navbarMinimize"
        >
          <div class="sidenav-toggler-inner">
            <i
              class="sidenav-toggler-line"
              :class="
                isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
              "
            ></i>
            <i
              class="sidenav-toggler-line"
              :class="
                isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
              "
            ></i>
            <i
              class="sidenav-toggler-line"
              :class="
                isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
              "
            ></i>
          </div>
        </a>
      </div>
      <div
        id="navbar"
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="isRTL ? 'px-0' : 'me-sm-4'"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="isRTL ? 'me-md-auto' : 'ms-md-auto'"
        >
        </div>
        <ul class="navbar-nav justify-content-end">
          <li
            class="nav-item dropdown d-flex align-items-center"
            :class="isRTL ? 'ps-2' : 'pe-3'"
          >
            <a
              id="dropdownMenuButton"
              href="#"
              :class="`p-0 nav-link ${
                isNavFixed && !darkMode ? ' opacity-8 text-dark' : 'text-white'
              } ${showMenu ? 'show' : ''}`"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="showMenu = !showMenu"
            >
            <i v-if="(this.$store.state.notific == true)" class="cursor-pointer fa fa-bell" style="color: yellow;"></i>
            <i v-else class="cursor-pointer fa fa-bell"></i>
            </a>
            <ul
              class="px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4" style="margin-top: 0rem!important;"
              :class="showMenu ? 'show' : ''"
              aria-labelledby="dropdownMenuButton"
            >
            
            <li class="mb-1" v-if="(this.$store.state.notific == true)">
                <router-link
              :to="{ name: 'Documentos recebidos' }">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <img
                        src="../../assets/img/check_alert.png"
                        class="avatar avatar-sm me-3"
                        alt="user image"
                      />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">Você possui documentos a assinar</span>
                      </h6>
                    </div>
                  </div>
                </a>
               </router-link> 
              </li>

              <li class="mb-1" v-else>
                <router-link
              :to="{ name: '' }">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <img
                        src="../../assets/img/check.png"
                        class="avatar avatar-sm me-3"
                        alt="user image"
                      />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">Nada por aqui ainda!</span>
                      </h6>
                    </div>
                  </div>
                </a>
               </router-link> 
              </li>
            </ul>
            
          </li>
        
          <li class="nav-item d-flex align-items-center">
            <router-link
              :to="{ name: '' }"
              class="px-0 nav-link font-weight-bold"
              :class="
                isNavFixed && !darkMode ? ' opacity-8 text-dark' : 'text-white'
              "
              target="_blank"
            >
              <i class="fa fa-user" :class="isRTL ? 'ms-sm-2' : 'me-sm-1'"></i>
              <span v-if="isRTL" class="d-sm-inline d-none">{{this.$store.state.user.name}}</span>
              <span v-else class="d-sm-inline d-none">{{this.$store.state.user.name}}</span>
            </router-link>
         <div class="dropdown" style="padding: 2px 0 0 13px;">
        <div class="dropdown-content">
          <div>
              <li>
                <router-link style="color:#fff" :to="{ name: '' }" @click="logout()" exact>
                <i class="fa fa-sign-out-alt" style="padding: 0 5px 0 0;"></i>Sair
                </router-link>
              </li>
          </div>
        </div>
      </div>
          </li>
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a
              id="iconNavbarSidenav"
              href="#"
              class="p-0 nav-link text-white"
              @click.prevent="navbarMinimize"
            >
              <div class="sidenav-toggler-inner">
                <i
                  :class="`sidenav-toggler-line ${
                    isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
                  }`"
                ></i>
                <i
                  :class="`sidenav-toggler-line ${
                    isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
                  }`"
                ></i>
                <i
                  :class="`sidenav-toggler-line ${
                    isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
                  }`"
                ></i>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Breadcrumbs from "../Breadcrumbs.vue";
import {AxiosAPI} from "@/axios"
import { mapState, mapMutations, mapActions } from "vuex";
import Cookie from "js-cookie"
export default {
  name: "Navbar",
  components: {
    Breadcrumbs
  },
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    ...mapState(["isRTL", "isNavFixed", "darkMode"]),
    currentRouteName() {
      return this.$route.name;
    },
    currentDirectory() {
      let dir = this.$route.path.split("/")[1];
      return dir.charAt(0).toUpperCase() + dir.slice(1);
    }
  },
  created() {
    this.minNav;
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),

    logout(){
      AxiosAPI
      .post("/auth/logout",{}, {
        headers: {
          Authorization: `Bearer `+ this.$store.state.accessToken
        },
      })
      .then(resp => {
      console.log(resp)
      this.removebiscoito();
      })
    },
  removebiscoito(){
    Cookie.remove('User')
    Cookie.remove('Session_ID')
    console.log("ok")
    location.reload();
  },

    },
};
</script>
<style>
.dropdown .dropdown-menu.dropdown-menu-end:before{
  right: 39px!important;
}
</style>
