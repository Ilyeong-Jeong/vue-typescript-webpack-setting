import Vue from 'vue';

// declare module 'vue/types/vue' {
//   interface Vue {
//     $store : any,
//     $router: any,
//     $route : any,
//   }
// }

// // ComponentOptions is declared in types/options.d.ts
// declare module 'vue/types/options' {
//   interface ComponentOptions<V extends Vue> {
//     router?: any,
//     beforeRouteEnter?: any,
//     beforeRouteLeave?: any,
//     beforeRouteUpdate?: any,
//   }
// }

declare module 'vue/types/vue' {
  // Global properties can be declared
  // on the `VueConstructor` interface
  interface VueConstructor {
    $myGlobal: string
  }
}

// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    myOption?: string
  }
}

declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
}