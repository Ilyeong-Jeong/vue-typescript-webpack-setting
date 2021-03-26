import Vue       from "vue";
import VueRouter from "vue-router";

import App from "../app.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode  : "history",
  base  : "/",
  routes: [
    {
      name     : 'root', 
      path     : '/', 
      component: App, 
      redirect : 'dashboard',
      children : [
        {
          name     : 'dashboard',
          path     : 'dashboard',
          component: () => import("../page/dashboard.vue")          
        }
      ]
    },
    
    { path: '*', redirect: '/' }    
  ]
});

export default router;