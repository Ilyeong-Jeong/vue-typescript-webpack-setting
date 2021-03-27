import Vue from "vue";

import { sync } from 'vuex-router-sync';

import Router from "./router";
import Store  from "./store";

import "./style/app.scss";

sync(Store, Router);

new Vue({
  router: Router,
  store : Store,
  render: (h) => h("router-view")
}).$mount("#app");