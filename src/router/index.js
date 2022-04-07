import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    /**主页路由 */
    {
      path: "/",
      name: "home",
      component: () => import("../views/indexDrag.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/indexDrag.vue"),
    },
  ],
});

export default router;
