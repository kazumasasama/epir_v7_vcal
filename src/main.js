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

import { Calendar } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

document.addEventListener("turbolinks:load", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new Calendar(calendarEl, {
    plugins: [timeGridPlugin, interactionPlugin],
  });

  calendar.render();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
