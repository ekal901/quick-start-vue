// src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex); // Vuex를 전역에서 사용하도록 작성

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store;