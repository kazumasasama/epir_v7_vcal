import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import VCalendar from "v-calendar";
import "v-calendar/lib/v-calendar.min.css";
Vue.use(VCalendar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
