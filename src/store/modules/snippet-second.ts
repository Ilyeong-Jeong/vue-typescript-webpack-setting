/**
 * snippet second
 */
// import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

// export interface SnippetSecondState {
//   data: string;
// }

// @Module({ namespaced: true }) 
// class SnippetSecondModule extends VuexModule implements SnippetSecondState { 
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

// export default SnippetSecondModule;