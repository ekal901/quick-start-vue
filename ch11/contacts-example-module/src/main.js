// src/main.js
// es6-promise Polyfill 사용, bootstrp참조 그리고 axios 추가
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import ES6Promise from 'es6-promise'

ES6Promise.polyfill()
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
