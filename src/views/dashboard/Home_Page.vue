<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <img
            style="
              width: 95%;
              border-radius: 35px;
              display: block;
              margin: 5px auto;
              max-width: 100%;
              height: 260px;
            "
            src=""
          />
        <div class="d-flex justify-content-between">

            <div class="card mt-4 mx-auto" style="width: 18rem">
              <router-link :to="{ name: 'Sessão da semana',params: { id: this.session_id } }" exact>
                <img
                  class="card-img-top"
                  src=""
                  alt="Card image cap"
                />
                <div class="card-body text-dark">
                  <h5 class="card-title">Sessão da Semana</h5>
                  <p class="card-text">
                    Clicando aqui você poderá acessar e criar a sessão da
                    semana.
                  </p>
                </div>
              </router-link>
            </div>
          
            <div v-if="this.$store.state.user.user_category_id == 1" class="card mt-4 mx-auto" style="width: 18rem;cursor: pointer;" data-toggle="modal" data-target="#exampleModal">
                <img
                  class="card-img-top"
                  src=""
                  alt="Card image cap"
                  style="border-radius: 10px 10px 10px 10px;"
                />
                <div class="card-body text-dark">
                  <h5 class="card-title">Criar sessão</h5>
                  <p class="card-text">
                    Crie a sessão da semana!
                  </p>
                </div>
          </div>

      
          <div v-if="this.$store.state.user.user_category_id == 3" class="card mt-4 mx-auto" style="width: 18rem;cursor: pointer;">
            <router-link :to="{ name: 'Tribuna' }" exact>     
                <img
                  class="card-img-top"
                  src=""
                  alt="Card image cap"
                  style="border-radius: 10px 10px 10px 10px;"
                />
                <div class="card-body text-dark">
                  <h5 class="card-title">Tribuna</h5>
                  <p class="card-text">
                    Inicie a tribuna por aqui!
                  </p>
                </div>
                </router-link>
          </div>

           <div v-if="this.user_name == 'Iolanda Pereira'" class="card mt-4 mx-auto" style="width: 18rem;cursor: pointer;">
            <router-link :to="{ name: 'Comissão' }" exact>
                <img
                  class="card-img-top"
                  src=""
                  alt="Card image cap"
                  style="border-radius: 10px 10px 10px 10px;"
                />
                <div class="card-body text-dark">
                  <h5 class="card-title">Comissão</h5>
                  <p class="card-text">
                    Visualize os arquivos dessa comissão!
                  </p>
                </div>
                </router-link>
          </div>

          <div v-if="this.$store.state.user.user_category_id == 6" class="card mt-4 mx-auto" style="width: 18rem;cursor: pointer;">
            <router-link :to="{ name: 'Controle da TV' }" exact>
                <img
                  class="card-img-top"
                  src=""
                  alt="Card image cap"
                  style="border-radius: 10px 10px 10px 10px;"
                />
                <div class="card-body text-dark">
                  <h5 class="card-title">Controle da TV</h5>
                  <p class="card-text">
                    Controle a tribuna por aqui.
                  </p>
                </div>
                </router-link>
          </div>

            <div class="card mt-4 mx-auto" style="width: 18rem">
              <router-link :to="{ name: 'Histórico de sessões' }" exact>
                <img
                  class="card-img-top"
                  src=""
                  alt="Card image cap"
                />
                <div class="card-body text-dark">
                  <h5 class="card-title">Histórico de sessões</h5>
                  <p class="card-text">
                    Clicando abaixo você poderá acessar o histórico de sessões
                    já realizadas.
                  </p>
                </div>
              </router-link>
            </div>
        </div>
          <div class="col-lg-3 col-md-6 col-12">
            <div class="col-lg-7 mb-lg"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Crie a sessão</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <label style="font-size: 15px;">Nome da sessão:</label>
         <input
            style="font-size: 15px;"
            class="mb-3 multisteps-form__input form-control"
            type="text"
            placeholder="Xº SESSÃO ORDINÁRIA DO Xº PERIODO" 
            v-model="session_name"               
            />

            <label style="font-size: 15px;">Data:</label>
            <input type="date" class="mb-3 multisteps-form__input form-control" v-model="data_start">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Voltar</button>
        <button type="button" class="btn btn-primary" data-toggle="modal"
                              data-target=".bd-example-modal-sm" @click="CreateSession();">Criar</button>
      </div>
    </div>
  </div>
</div>

<div
      class="modal fade bd-example-modal-lg-startmodal"
      id="SignerTribuna"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
      style="z-index: 10000"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Iniciar tribuna
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-primary bg-success"
              data-dismiss="modal"
               data-toggle="modal" data-target=".tribunaconfirma"
              @click="CreateTribuna();"
              style="width: 180px; height: 60px"
            >
              Iniciar a tribuna!
            </button>
            <button
              type="button"
              class="btn btn-primary bg-smartlegis ml-5"
              data-dismiss="modal"
               data-toggle="modal" data-target=".lista"
              @click="inscritos();"
              style="width: 180px; height: 60px"
            >
              Lista de inscritos
            </button>
            </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
                class="modal fade tribunaconfirma"
                tabindex="-1"
                role="dialog"
                aria-labelledby="mySmallModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h6>STATUS INSCRIÇÃO DA TRIBUNA</h6>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        @click="finallyloading()"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body">
                      <div
                        id="loads"
                        class="justify-content-center"
                        style="display: none"
                      >
                        <div class="spinner-grow text-primary" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-secondary" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-success" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-danger" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-warning" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-info" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-dark" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      </div>

                      <div
                        id="start_tribune"
                        class="justify-content-center"
                        style="display: none"
                      >
                        <span
                          class="
                            justify-content-center
                            text-uppercase
                            font-weight-bold
                          "
                          style="font-size: 13px; color: green"
                        >
                          Tribuna iniciada!
                        </span>
                      </div>

          </div>
        </div>
      </div>
    </div>
    <div
                class="modal fade lista"
                tabindex="-1"
                role="dialog"
                aria-labelledby="mySmallModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h6>Lista de inscritos</h6>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body">
                      <span> teste </span>
                      </div>

          </div>
        </div>
      </div>

<div
                class="modal fade bd-example-modal-sm"
                tabindex="-1"
                role="dialog"
                aria-labelledby="mySmallModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h6>STATUS DA CRIAÇÃO DA SESSÃO</h6>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        @click="finallyloading()"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div class="modal-body">
                      <div
                        id="loads"
                        class="justify-content-center"
                        style="display: none"
                      >
                        <div class="spinner-grow text-primary" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-secondary" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-success" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-danger" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-warning" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-info" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <div class="spinner-grow text-dark" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      </div>

                      <div
                        id="sessionoff"
                        class="justify-content-center"
                        style="display: none"
                      >
                        <span
                          class="
                            justify-content-center
                            text-uppercase
                            font-weight-bold
                          "
                          style="font-size: 13px; color: red"
                        >
                          Você não colocou nome a sessão!
                        </span>
                      </div>

                      <div
                        id="dataoff"
                        class="justify-content-center"
                        style="display: none"
                      >
                        <span
                          class="
                            justify-content-center
                            text-uppercase
                            font-weight-bold
                          "
                          style="font-size: 13px; color: red"
                        >
                          Você não colocou data a sessão!
                        </span>
                      </div>
                       <div
                        id="loadingoff"
                        class="justify-content-center"
                        style="display: none"
                      >
                        <span
                          class="
                            justify-content-center
                            text-uppercase
                            font-weight-bold
                          "
                          style="font-size: 13px; color: green"
                        >
                          Sessão criada!
                        </span>
                      </div>
                      
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import { AxiosAPI } from "@/axios"
export default {
  name: "DashboardDefault",
  components: {},
  data() {
    return {
      data_start:"",
      session_name: "",
      session_id: 0,
      user_name: "",
      vereadores: [],
      quorum: [],
      quorums: [],
      quorum_obj: 0,
      grapic: false,
    };
  },
  mounted(){this.User(); this.GetSession();this.getQuorum();this.GetUsersAll();this.Notification_sign();},
  methods: {
    
    User(){this.$store.dispatch('DadosUser'); setTimeout(()=>{this.category_user = this.$store.state.user.user_category_id}, 1000); },
    GetUsersAll(){this.$store.dispatch('DadosUserAllEnvio'); setTimeout(()=>{this.vereadores = this.$store.state.userAllE;}, 1000);},
    GetSession(){this.$store.dispatch('GetSession'); setTimeout(()=>{this.session_id = this.$store.state.session.id}, 1300);},

    Notification_sign(){ this.$store.dispatch('Notification') },

    CreateSession() {
      if (this.session_name === "") {
      document.getElementById("loads").style.display = "none";
      document.getElementById("sessionoff").style.display = "flex";
        return;
      }
      if (this.data_start === "") {
        document.getElementById("loads").style.display = "none";
        document.getElementById("dataoff").style.display = "flex";
        return;
      }
      let create = {
          name: this.session_name,
          datetime_start: this.data_start,
          datetime_end: this.session_enddate,
          session_status_id: 1,
          user_id: 1,
      }
      AxiosAPI.post("/session", create, {
          headers: {
            Authorization: `Bearer ` + this.$store.state.accessToken
            }
            }).then((resp)=>{
            if (resp.status === 200) {
            document.getElementById("loads").style.display = "none";
            document.getElementById("loadingoff").style.display = "flex";
            this.GetSession()
            }})},
      
      finallyloading() {
      document.getElementById("loads").style.display = "flex";
      document.getElementById("loadingoff").style.display = "none";
      document.getElementById("sessionoff").style.display = "none";
      document.getElementById("dataoff").style.display = "none";
      document.getElementById("start_tribune").style.display = "none";
    },


    getQuorum() {
      setTimeout(()=>{
         AxiosAPI.get("/quorum?session_id=" + this.$store.state.session.id, {
        headers: {
          authorization: `Bearer ` + this.$store.state.accessToken,
        },
      }).then((response) => {
        if( response.data.data.length <=0 ){
          return
        }else {
        let size = response.data.data.length;
        this.quorum_obj = response.data.data[size - 1];
        localStorage.setItem('Quorum_id',this.quorum_obj.id )
        }
        
      });
      },1050) 
     
    },
    

  },
};
</script>
<style>
  .close{
  font-size: 2.3rem !important;
}
</style>
