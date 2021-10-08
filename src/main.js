import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import VCalendar from "v-calendar";
// import "v-calendar/lib/v-calendar.min.css";
Vue.use(VCalendar);

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
