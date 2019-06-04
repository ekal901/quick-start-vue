// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant'
import axios from 'axios'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    contacts: []
  },
  mutations: {
    // 변이는 상태를 변경하는 데 집중
    [Constant.SEARCH_CONTACT]: (state, payload) => {
      state.contacts = payload.contacts;
    }
  },
  actions: {
    // 액션은 api 호출을 담당
    [Constant.SEARCH_CONTACT]: (store, payload) => {
      // axios.get() 메서드를 호출한 결과인 Promise 객체 리턴 받아
      axios.get(Constant.BASE_URL + payload.name)
        // 비동기 처리하는 then() 메서드 작성
        .then((response) => {
          // 데이터 변이를 일으키기 위해 commit() 메서드 호출
          store.commit(Constant.SEARCH_CONTACT, { contacts: response.data })
        }).catch(ex => {
          console.log("Search Contact Failed: ", ex);
        })
    }
  }
  // async~await을 사용한 구현
  // Promise 패턴 대신 ES2015-stage2에서 제공 하는 새로운 기능
  /*
  actions: {
    async [Constant.SEARCH_CONTACT](store, payload) {
      var response = await axios.get(Constant.BASE_URL + payload.name);
      store.commit(Constant.SEARCH_CONTACT, { contacts: response.data })
    }
  }
  */
})

export default store;