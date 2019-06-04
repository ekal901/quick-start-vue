// src/components/List.vue

// doneToggle, deleteTodo 메서드 파라미터 {id: a.id}로 변경
<template>
  <ul id="todolist">
    <li v-for="a in todolist" :key="a.id" :class="checked(a.done)" @click="doneToggle({id: a.id})">
      <span>{{a.todo}}</span>
      <span v-if="a.done">(done)</span>
      <span class="close" @click.stop="deleteTodo({id: a.id})">&#x00D7;</span>
    </li>
  </ul>
</template>

<script>
import Constant from "../Constant";
import { mapState, mapMutations } from "vuex";
export default {
  name: "List",
  // mapState를 사용해서 todolist 상태 데이터를 계산형 속성에 자동으로 바인딩
  // 저장소 상태의 이름 (state.todolist)과 동일한 이름으로 바인딩 된다.
  computed: mapState(["todolist"]),
  // 저장소 상태의 이름과 다르게 바인딩 하는 경우
  // computed: mapState({ todolist2: state => state.todolist }),
  methods: {
    checked(done) {
      if (done) {
        return { checked: true };
      } else {
        return { checked: false };
      }
    },
    // 변이를 동일한 이름의 메서드에 자동으로 연결
    // 호출할 때 변이의 인자 형식을 따라야 한다 (payload 인자형식에 맞추어야한다)
    // 예시: {id: a.id} 같은 형태
    ...mapMutations([Constant.DELETE_TODO, Constant.DONE_TOGGLE])
    // 메서드 이름을 변이의 이름과 다르게 사용하는 경우
    // ...mapMutations({
    //   removeTodo: Constant.DELETE_TODO,
    //   toggleDone: Constant.DONE_TOGGLE
    // })
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  cursor: pointer;
  position: relative;
  padding: 8px 8px 8px 40px;
  background: #eee;
  font-size: 14px;
  transition: 0.2s;
  -webkit-user-select: none;
  user-select: none;
}
ul li:hover {
  background: #ddd;
}
ul li:checked {
  background: #bbb;
  color: fff;
  text-decoration: line-through;
}
ul li:checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0px 1px 1px 0px;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 8px;
  width: 8px;
}
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px 12px;
}
.close:hover {
  background-color: #f44336;
  color: white;
}
</style>
