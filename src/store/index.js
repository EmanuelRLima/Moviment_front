import Vuex from "vuex";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import {AxiosAPI} from "@/axios"
import Cookie from "js-cookie"



export default new Vuex.Store({
  state: {
    user: {},
    accessToken: null,
    expiresIn: null,
    tokenType: null,
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    isRTL: false,
    color: "",
    sidebarType: "bg-white",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
    bootstrap,
  },

  mutations: {

    UpdateToken(state, object ) {
      state.accessToken = object.token;
    },
    Logado(state){
      console.log(state)
    },
    UpdateUser(state, object){
      state.user = object.data
    },
   
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector("#app");

      if (sidenav_show.classList.contains("g-sidenav-show") && sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.add("g-sidenav-pinned");
        sidenav_show.classList.remove("g-sidenav-hidden");
        state.isPinned = true;
      } else if (sidenav_show.classList.contains("g-sidenav-show") && sidenav_show.classList.contains("g-sidenav-pinned")) {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      } else if (sidenav_show.classList.contains("g-sidenav-show")) {
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      }
    },
    setSidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    toggleDefaultLayout(state) {
      state.showNavbar = !state.showNavbar;
      state.showSidenav = !state.showSidenav;
      state.showFooter = !state.showFooter;
    },
  },  
  getters: {
    voted(state) {
      return state.voted
    },
  },
  
  actions: {
    Login(context, payload) {
      return new Promise((resolve, reject) => {
        AxiosAPI
          .post("/auth/login", {
            email: payload.email,
            password: payload.password
          })
          .then(resp => {
            Cookie.set('User', resp.data.data.token,{ expires : 1 })
            context.commit("UpdateToken", resp.data.data);
            resolve(resp);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    },
    RefreshToken(context){
      return new Promise((resolve) => {
        if(Cookie.get('User') == ''){
          this.$router.push({
            name: 'Login'        
           })
        }else {
          let token = Cookie.get('User')
          let object = {
            token
          }
          context.commit("UpdateToken", object );
          resolve(context);
        }
      }
)},
      DadosUser(context){
        return new Promise((resolve, reject) => {
          AxiosAPI.get("/user", {
            headers: {
                Authorization: `Bearer `+ this.state.accessToken
            }
          })
            .then(resp => {
              context.commit("UpdateUser", resp);
              resolve(resp);
            })
            .catch(err => {
              console.log(err);
              reject(err);
            });
        });
      },
      
    

    toggleSidebarColor({ commit }, payload) {
      commit("setSidebarType", payload);
    },

  },

});