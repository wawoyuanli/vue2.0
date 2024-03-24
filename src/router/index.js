import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    /**主页路由 */
    {
      path: "/home",
      name: "home",
      component: () => import("../views/indexDrag.vue"),
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/keepalive",
      name: "keepalive",
      component: () => import("../views/keepAlive.vue"),
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/areaDirectives",
      name: "areaDirectives",
      component: () => import("../views/directivesIndex.vue"),
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/computedIndex",
      name: "computedIndex",
      component: () => import("../views/computedIndex.vue"),
    },
    {
      path: "/commomIndex",
      name: "commomIndex",
      component: () => import("../views/commonNum.vue"),
    },
    {
      path: "/reactiveIndex",
      name: "reactiveIndex",
      component: () => import("../views/reactiveIndex.vue"),
    },
  ],
});

export default router;
