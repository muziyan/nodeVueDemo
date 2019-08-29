import Vue from 'vue'
import Router from 'vue-router'
import Main from "./views/Main";
import CategoriesAdd from "./views/CategoriesAdd";
import CategoriesList from "./views/CategoriesList";

import ItemsAdd from "./views/ItemsAdd";
import ItemsList from "./views/ItemsList";

import HeroAdd from "./views/HeroAdd";
import HeroList from "./views/HeroList";

import ArticleAdd from "./views/ArticleAdd";
import ArticleList from "./views/ArticleList";

import AdsAdd from "./views/AdsAdd";
import AdsList from "./views/AdsList";

import adminUserAdd from "./views/adminUserAdd";
import adminUserList from "./views/adminUserList";

import login from "./views/login";

Vue.use(Router);



const router =  new Router({
  routes: [
    {path:"/login",name: login,component:login,mate:{isPublic:true}},
    {
      path: '/',
      name: 'main',
      component: Main,
      children:[
        {path:"/categories/create",component:CategoriesAdd},
        //使用同一件组件，props表示把里面任何的注入到这个组件里面
        {path:"/categories/edit/:id",component:CategoriesAdd,props:true},
        {path:"/categories/list",component:CategoriesList},

        {path:"/items/create",component:ItemsAdd},
        //使用同一件组件，props表示把里面任何的注入到这个组件里面
        {path:"/items/edit/:id",component:ItemsAdd,props:true},
        {path:"/items/list",component:ItemsList},

        {path:"/heroes/create",component:HeroAdd},
        //使用同一件组件，props表示把里面任何的注入到这个组件里面
        {path:"/heroes/edit/:id",component:HeroAdd,props:true},
        {path:"/heroes/list",component:HeroList},

        {path:"/articles/create",component:ArticleAdd},
        //使用同一件组件，props表示把里面任何的注入到这个组件里面
        {path:"/articles/edit/:id",component:ArticleAdd,props:true},
        {path:"/articles/list",component:ArticleList},

        {path:"/ads/create",component:AdsAdd},
        //使用同一件组件，props表示把里面任何的注入到这个组件里面
        {path:"/ads/edit/:id",component:AdsAdd,props:true},
        {path:"/ads/list",component:AdsList},

        {path:"/admin_user/create",component:adminUserAdd},
        //使用同一件组件，props表示把里面任何的注入到这个组件里面
        {path:"/admin_user/edit/:id",component:adminUserAdd,props:true},
        {path:"/admin_user/list",component:adminUserList},
      ]
    },
  ]
})

router.beforeEach((to,from,next)=>{
  if (to.meta.isPublic && !localStorage.token){
    return next("/login");
  }
  next();
});

export default router;