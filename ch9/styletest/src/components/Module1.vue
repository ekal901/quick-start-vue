<template>
  <div>
    <buttton :class="$style.hand">CSS Module을 적용한 버튼</buttton>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$style);
  }
};
</script>
<style module>
.hand {
  cursor: pointer;
  background-color: lightcoral;
  color: white;
}
</style>
