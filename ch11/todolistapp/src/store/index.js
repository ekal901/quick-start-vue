// src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../Constant'

Vue.use(Vuex); // Vuex를 전역에서 사용하도록 작성

const store = new Vuex.Store({
  state: {
    todolist: [
      { id: 1, todo: "Watching Movie", done: false },
      { id: 2, todo: "Walking", done: true },
      { id: 3, todo: "ES6 Study", done: false },
      { id: 4, todo: "Basketball Game", done: false }
    ]
  },
  mutations: {
    // state : 기존 상태 정보
    // payload : 상태를 변경할 때 필요한 정보 (새로 변경할 정보)
    [Constant.ADD_TODO]: (state, payload) => {
      if (payload.todo !== "") {
        state.todolist.push({ id: state.todolist.length + 1, todo: payload.todo, done: false });
      }
    },
    [Constant.DONE_TOGGLE]: (state, payload) => {
      let index = payload.id - 1;
      state.todolist[index].done = !state.todolist[index].done;
    },
    [Constant.DELETE_TODO]: (state, payload) => {
      let index = payload.id - 1;
      state.todolist.splice(index, 1);
    }
  }
})

export default store;