<template>
<div>
  <div class="container top-0 position-sticky z-index-sticky">

  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div
              class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"
            >
            <img src="../../../assets/img/SmartLogin.png">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Login</h4>
                  <p class="mb-0">Insira seu usuário e senha para acessar o sistema</p>
                </div>
                <div class="card-body">
                  <form v-on:submit.prevent="Login" role="form">
                    <div class="mb-3">
                      <argon-input
                        v-model="user"
                        id="user"
                        type="text"
                        placeholder="Usuário"
                        name="user"
                        size="lg"
                      />
                    </div>
                    <div class="mb-3">
                      <argon-input
                        id="password"
                        type="password"
                        v-model="password"
                        placeholder="Senha"
                        name="password"
                        size="lg"
                      />
                    </div>
                    <argon-switch id="rememberMe" name="rememberMe">
                      Lembre-me
                    </argon-switch>
                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        full-width
                        size="lg"
                        >Login</argon-button
                      >
                    </div>
                    <div v-if="incorrectAuth">
                    <label
                    ><strong class="color6"
                    >Login e/ou senha incorretos!</strong
                    ><br/><br/></label
                      >
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Não possui um conta?
                    <router-link
                      :to="{ name: '' }"
                      class="text-success text-gradient font-weight-bold"
                      >Cadastre-se</router-link
                    >
                  </p>
                  <!-- aqui é para fazer rota em cadastro -->
                </div>
              </div>
            </div>
            <div
              class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column"
            >
              <div
                class="position-relative h-100 m-2 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                :style="{
                  backgroundImage:
                    'url(' +
                    'https://raw.githubusercontent.com/EmanuelRLima/Portfolio/portest/figma/pauta-de-reuniao-produtiva.jpg' +
                    ')',
                    backgroundSize: 'cover'
                }"
              >
              
                <span class="mask bg-gradient-smartlegis opacity-6"></span>

                <img class="mx-auto text-center" style="height: 104px;width: 104px;object-fit: cover;" src="https://raw.githubusercontent.com/EmanuelRLima/Portfolio/portest/figma/logo.png">
                <h1
                  class="mt-3 text-white font-weight-bolder position-relative"
                >
                  Smartlegis
                </h1>
                
                <h5 class="text-white position-relative">
                  Seja bem vindo, faça login ao lado para ter acesso ao sistema! 
                </h5>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  </div>
</template>

<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];
import { mapMutations } from "vuex";

export default {
  name: "Login",

data(){
  return {
    user: "",
    password: "",
    incorrectAuth: false,
  };
},
  components: {
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.toggleDefaultLayout();
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.toggleDefaultLayout();
    body.classList.add("bg-gray-100");
  },
  methods: {
    ...mapMutations(["toggleDefaultLayout"]),
  

  Login() {
      let email = document.getElementById("user").value;
      let password = document.getElementById("password").value;
      this.$store.dispatch('Login', {
          email: email,
          password: password
        })
        .then(() => {
          this.$router.push({
            name: 'Página inicial'
          });
        })
        .catch(() => {
          this.incorrectAuth = true;
          document.getElementById("loginbtn").classList.toggle("active");
        });
    },

  },


};
</script>
