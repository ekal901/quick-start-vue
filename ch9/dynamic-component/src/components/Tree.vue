<template>
  <ul>
    <li v-for="s in subs" :class="s.type" :key="s.name">
      {{s.name}}
      <tree :subs="s.subs"></tree>
      <!-- 재귀 호출 부분 -->
    </li>
  </ul>
</template>

<script>
export default {
  name: "tree",
  props: ["subs"]
};
</script>
