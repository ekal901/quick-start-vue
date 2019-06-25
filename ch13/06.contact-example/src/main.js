// src/main.js
// es6-promise Polyfill 사용, bootstrp참조 그리고 axios 추가
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router';

import 'bootstrap/dist/css/bootstrap.css'
import ES6Promise from 'es6-promise'

ES6Promise.polyfill()
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: () => import('./components/Home.vue') },
    { path: '/about', name: 'about', component: () => import('./components/About.vue') },
    {
      path: '/contacts', name: 'contacts', component: () => import('./components/ContactList.vue'),
      children: [
        { path: 'add', name: 'addcontact', component: () => import('./components/ContactForm.vue') },
        { path: 'update/:no', name: 'updatecontact', component: () => import('./components/ContactForm.vue'), props: true },
        { path: 'photo/:no', name: 'updatephoto', component: () => import('./components/UpdatePhoto.vue'), props: true }
      ]
    }
  ]
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
