// src/store/module1.js
import Constant from '../Constant'
import axios from 'axios'
export default {
  state: {
    contacts: []
  },
  mutations: {
    [Constant.SEARCH_CONTACT]: (state, payload) => {
      state.contacts = payload.contacts;
    }
  },
  actions: {
    [Constant.SEARCH_CONTACT]: (store, payload) => {
      axios.get(Constant.BASE_URL + payload.name)
        // 연락처 검색이 성공적으로 완료 되면,
        .then((response) => {
          // store.commit으로 상태 변경
          store.commit(Constant.SEARCH_CONTACT, { contacts: response.data });
          // 검색된 연락처가 존재하면,
          if (response.data.length > 0) {
            // 루트 저장소의 keywordlist 상태 데이터에 추가
            store.dispatch(Constant.ADD_KEYWORD, payload);
          }
        })
    }
  }
}