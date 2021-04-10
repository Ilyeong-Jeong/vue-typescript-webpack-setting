/**
 * snippet
 */
// import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
// import store from '@/store';

// export interface SnippetState {
//   data: string;
// }

// @Module({ dynamic: true, store, namespaced: true, name: 'snippet' }) 
// class Snippet extends VuexModule implements SnippetState { 
//   public data: string = 'snippet'; 
  
//   @Mutation 
//   private SET_DATA(data: string) {
//     this.data = data; 
//   } 
  
//   @Action({ commit: 'SET_DATA', rawError: true })
//   public setData(data: string) { 
    
//   } 
  
//   get snippetData(): string { 
//     return this.data; 
//   } 
// }

// export const SnippetModule = getModule(Snippet);

