// Child1.vue
<template>
  <div class="main test">
    {{msg}}
    <child11></child11>
    {{msg}}
  </div>
</template>
<script>
import Child11 from "./Child11";
export default {
  name: "child1",
  components: {
    Child11
  },
  data() {
    return {
      msg: "Child1"
    };
  }
};
</script>
<style scoped>
.main {
  border: solid 1px black;
  background-color: blanchedalmond;
}
.test {
  padding: 10px;
  text-decoration: underline;
  border: solid 1px black;
}
</style>


