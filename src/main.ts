import Vue from 'vue';
import App from '@/App.vue';

import Router from '@/router';
import Store  from '@/store';

import { Component } from 'vue-property-decorator';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteUpdate',
  'beforeRouteLeave',
]);

import '@/style/app.scss';

new Vue({
  router: Router,
  store : Store,
  render: (h) => h(App),
}).$mount("#app");