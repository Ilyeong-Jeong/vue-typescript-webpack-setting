import Vue from 'vue';
import Vuex from 'vuex';

// import { SnippetModule } from './modules/snippet';

Vue.use(Vuex);

export interface IRootState {
  // snippet: typeof SnippetModule;
}

export default new Vuex.Store<IRootState>({})