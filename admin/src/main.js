import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

//将http绑定到原型上
import http from "./http";
Vue.prototype.$http  = http;

import "./style.css";

Vue.config.productionTip = false;

Vue.mixin({
  computed:{
    uploadUrl(){
      return this.$http.defaults.baseURL+'uploads'
    }
  },
  methods:{
    getAuthHeaders(){
      return {
        Authorization : `Bearer ${localStorage.token || ""}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
