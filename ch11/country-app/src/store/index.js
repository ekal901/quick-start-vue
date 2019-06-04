// src/store/index.js

import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../Constant'
import _ from 'lodash'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    currentRegion: "all",
    countries: [
      { no: 1, name: 'USA', 'capital': 'Washington', region: 'america' },
      { no: 2, name: 'France', 'capital': 'Paris', region: 'europe' },
      { no: 3, name: 'UK', 'capital': 'London', region: 'europe' },
      { no: 4, name: 'China', 'capital': 'Beijing', region: 'asia' },
      { no: 5, name: 'Thailand', 'capital': 'Bangkok', region: 'asia' },
      { no: 6, name: 'Moroco', 'capital': 'Ravat', region: 'africa' },
      { no: 7, name: 'Laos', 'capital': 'Vientian', region: 'asia' },
      { no: 8, name: 'Vietnam', 'capital': 'Hanoi', region: 'asia' },
      { no: 9, name: 'FIJI', 'capital': 'Suba', region: 'oceania' },
      { no: 10, name: 'Solomon', 'capital': 'Honiara', region: 'oceania' },
      { no: 11, name: 'Jameica', 'capital': 'Kingston', region: 'africa' },
      { no: 12, name: 'Namivia', 'capital': 'vithook', region: 'america' },
      { no: 13, name: 'Dongtimore', 'capital': 'dily', region: 'asia' },
      { no: 14, name: 'Mexico', 'capital': 'Mexico City', region: 'america' },
      { no: 15, name: 'Venesuela', 'capital': 'Karakas', region: 'america' },
      { no: 16, name: 'Sorthamore', 'capital': 'apea', region: 'oceania' }
    ]
  },
  getters: {
    countriesByRegion(state) {
      if (state.currentRegion == "all") {
        return state.countries;
      } else {
        return state.countries.filter(c => {
          c.region == state.countries.currentRegion;
        })
      }
    },
    regions(state) {
      // map 메서드로 지역명만으로 이루어진 새로운 배열을 만들고
      var regions = state.countries.map(c => c.region);
      // lodash 라이브러리의 _.uniq() 메서드를 이용해 중복 지역명을 제거한 지역명 리스트
      regions = _.uniq(regions);
      // 모든 국가 정보를 볼 수 있는 all 을 배열의 첫번째 위치에 삽입한 뒤 리턴
      regions.splice(0, 0, "all");
      return regions;
    },
    currentRegion(state) {
      return state.currentRegion;
    }
  },
  mutations: {
    [Constant.CHANGE_REGION]: (state, payload) => {
      state.currentRegion = payload.region;
    }
  }
})

export default store;