import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import LoginSignin from "@/views/LoginSignin.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      /*  redirect: "/", */
      component: Login,
    },
    {
      path: "/loginsignin",
      name: "loginsignin",
      component: LoginSignin,
    },

    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
