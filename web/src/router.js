import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Main from "./views/Main";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name: 'main',
      component: Main,
      children:[
        {path:'/',component:Home}
      ]
    },
  ]
})
