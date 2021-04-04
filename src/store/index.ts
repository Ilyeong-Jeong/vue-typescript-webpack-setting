import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state     = {};
const getters   = {};
const actions   = {};
const mutations = {};
const modules   = {};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules
});

export default store;