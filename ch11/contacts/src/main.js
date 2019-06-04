// src/main.js
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ES6Promise from 'es6-promise'

// IE에서는 ES6의 Promise 객체를 지원하지 않는다.
// IE에서 Promise를 사용해 비동기 작업을 수행하려면 es6-promise 패키지 설치가 필요
ES6Promise.polyfill(); // IE에서도 원활하게 실행될 수 있도록 설정

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
