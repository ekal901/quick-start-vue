// tests/unit/List.spec.js
import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'
import store from '@/store'
import List from '@/components/List.vue'
// Constant 파일 import
import Constant from '@/Constant'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('List.vue', () => {
  let wrapper;

  // const wrapper = mount(List, { store, localVue })를
  // before() 이벤트 훅으로 공유
  before(() => {
    // 테스트 스위트 시작 전에, wrapper 객체를 하나 만들어 두 테스트에서 공유
    wrapper = mount(List, { store, localVue })
    console.log("before: 테스트 스위트 전체의 시작 전에 실행")
  })

  after(() => {
    console.log("after: 테스트 스위트 전체의 종료 후에 실행")
  })

  beforeEach(() => {
    console.log("beforeEach: 각 테스트의 시작 전에 실행")
  })

  afterEach(() => {
    console.log("afterEach: 각 테스트의 종료 후에 실행")
  })

  it('초기 렌더링 화면 테스트', (done) => {
    Vue.nextTick()
      .then(() => {
        expect(wrapper.vm.$el.querySelectorAll('li').length).to.equal(4)
        done()
      })
      .catch(done)
  })

  it('새로운 todo 추가후 목록 확인', (done) => {
    // store의 dispatch 메서드를 이용해, 추가 액션을 일으킨 후에
    // List.vue 컴포넌트가 렌더링하는 목록의 개수를 확인하는 테스트
    wrapper.vm.$store.dispatch(Constant.ADD_TODO, { todo: '스쿼시' })
    wrapper.vm.$store.dispatch(Constant.ADD_TODO, { todo: '수영' })

    Vue.nextTick()
      .then(() => {
        var list = wrapper.vm.$el.querySelectorAll('li');
        expect(list[list.length - 1].textContent).to.contain('수영')
        expect(list[list.length - 2].textContent).to.contain('스쿼시')
        expect(list.length).to.equal(6)
        done()
      })
      .catch(done)
  })
})