<template>
<div>
  <div
    id="sidenav-collapse-main"
    class="collapse navbar-collapse w-auto h-auto h-100 overflow-hidden"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse
          collapse-ref="dashboardsExamples"
          nav-text="Tarefas"
          :class="getRoute() === 'dashboards' ? 'active' : ''"
        >
          <template #icon>
            <i class="ni ni-shop text-primary text-sm opacity-10"></i>
          </template>
          <template #list>
            <ul class="nav ms-4">
              
              <!-- nav links -->
              <!--Alterar params: { id: '1' } -->
              <sidenav-item
              
                :to="{ name: 'Home'}"
                mini-icon="H"
                text="Home"
              />
                            
            </ul>
          </template>
        </sidenav-collapse>
      </li>

      <li class="nav-item">
        <sidenav-collapse
          collapse-ref="pagesExamples"
          nav-text="Documentos"
          :class="getRoute() === 'pages' ? 'active' : ''"
        >
          <template #icon>
            <i class="ni ni-ungroup text-warning text-sm opacity-10"></i>
          </template>
          <template #list>
            <ul class="nav ms-4">
              <!-- nav links -->

            </ul>
          </template>
        </sidenav-collapse>
      </li>

    </ul>

  </div>
  <div class="mt-3 sidenav-footer">
    <sidenav-card
      :card="{
        title: 'Precisa de ajuda?',
        description: 'Entre em contato pelo whatsapp',
        links: [
          {
            label: 'WhatsApp',
            route:
              'https://wa.me/558491374004',
            color: 'success'
          }
        ]
      }"
    />
  </div>
  </div>
</template>
<script>
import SidenavItem from "./SidenavItem.vue";
import SidenavCollapse from "./SidenavCollapse.vue";
import SidenavCard from "./SidenavCard.vue";
export default {
  name: "SidenavList",
  components: {
    SidenavItem,
    SidenavCollapse,
    SidenavCard,
  },
  data(){
    return{
      session_id: 'Hoje',
    }
  },
  methods: {

   

    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    }
  }
};
</script>
