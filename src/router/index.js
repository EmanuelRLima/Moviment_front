import { createRouter, createWebHistory } from "vue-router";

import Guard from "../Services/service";
import Home from "../views/dashboard/Home_Page.vue";
import Login from "../views/auth/signin/Login.vue";


const routes = [
  {
    path: "/",
    name: "login",
    redirect: "/Home"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/Home",
    name: "Página inicial",
    component: Home,
    beforeEnter: Guard.auth
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;
