// tests/unit/List.spec.js
import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'
import store from '@/store'
// Constant 삭제, List.vue 컴포넌트 삭제, ToDoList.vue 컴포넌트 import
import ToDoList from '@/components/ToDoList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ToDoList.vue', () => {
  let wrapper;

  before(() => {
    // mount하는 컴포넌트 ToDoList.vue로 변경
    wrapper = mount(ToDoList, { store, localVue })
    console.log("before: 테스트 스위트 전체의 시작 전에 실행")
  })

  it('초기 렌더링 화면 테스트', (done) => {
    Vue.nextTick()
      .then(() => {
        expect(wrapper.vm.$el.querySelectorAll('li').length).to.equal(4)
        done()
      })
      .catch(done)
  })

  it('클릭이벤트 후 렌더링 결과 확인', (done) => {
    // 입력 값을 TodoList의 첫번째 자식 컴포넌트인 InputToDo 컴포넌트의 
    // 로컬 데이터에 새로운 todo 입력
    // 1. InputToDo.vue의 data()에 todo를 변경
    wrapper.vm.$children[0].$data.todo = "피겨강습";

    // 2. 이벤트 객체 생성
    const evtClick = new window.Event('click');
    // 3. 클릭할 버튼 검색 (span태그 중에 클래스명이 addbutton인 버튼)
    var addbutton = wrapper.vm.$el.querySelector('span.addbutton');
    // dispatchEvent로 클릭 이벤트를 일으킨다.
    addbutton.dispatchEvent(evtClick);
    // Vue 인스턴스에서 상태의 변경을 감지할 수 있도록
    // 감시자(watcher)를 구동
    wrapper.vm._watcher.run();

    // nextTick()을 이용해 DOM 업데이트 사이클이 완료된 후에 결과를 확인
    Vue.nextTick()
      .then(() => {
        var list = wrapper.vm.$el.querySelectorAll('li');
        expect(list[list.length - 1].textContent).to.contain('피겨강습')
        expect(list.length).to.equal(5)
        done()
      })
      .catch(done)
  })
})