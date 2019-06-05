// src/main.js
import Vue from "vue";
import ToDoList from "./components/ToDoList.vue";
import store from './store'

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(ToDoList)
}).$mount("#app");