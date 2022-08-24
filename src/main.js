import Vue from "vue";
import App from "./App.vue";
import router from "@/core/router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import BootstrapVue, { IconsPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(IconsPlugin);
Vue.use(Antd);
Vue.use(BootstrapVue);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
