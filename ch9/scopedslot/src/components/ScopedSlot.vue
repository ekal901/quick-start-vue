// ScopedSlot.vue
// 자체 x, y 값이 있고, v-model로 바인딩 되어 있기 때문에 값 변경시 데이터 옵션이 즉시 반영됨
<template>
  <div class="child">
    x:
    <input type="text" v-model="x">
    <br>y:
    <input type="text" v-model="y">
    <br>
    <slot name="type1" :cx="x" :cy="y"></slot>
    <slot name="type2" :cx="x" :cy="y"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      x: 4,
      y: 5
    };
  }
};
</script>
<style scoped>
.child {
  padding: 5px;
  border: solid 1px black;
}
</style>