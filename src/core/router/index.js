import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/test",
      component: () => import("@/view/dailyReport/DailyReport.vue"),
      meta: {},
    },
  ],
});
export default router;
