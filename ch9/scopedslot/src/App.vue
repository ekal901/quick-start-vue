// App.vue
// 자식 컴포넌트인 x, y 데이터를 부모 컴포넌트로 전달하여 부모 컴포넌트에서 출력 형식을 지정하기 원할 경우
// template에 선언된 scope="p1"으로 자식 컴포넌트로부터 속성(p1이라는 이름으로)을 전달 받아 템플릿 안에서만 사용 (범위슬롯)
<template>
  <div class="parent">
    <child>
      <template slot="type1" scope="p1">
        <div>{{p1.cx}} + {{p1.cy}} = {{parseInt(p1.cx) + parseInt(p1.cy)}}</div>
      </template>
      <template slot="type2" scope="p2">
        <div>{{p2.cx}} plus {{p2.cy}} is {{parseInt(p2.cx) + parseInt(p2.cy)}}</div>
      </template>
    </child>
  </div>
</template>

<script>
import Child from "./components/ScopedSlot";

export default {
  name: "app",
  components: {
    Child
  }
};
</script>

<style>
.parent {
  border: dashed 2px black;
  padding: 5px;
}
</style>
