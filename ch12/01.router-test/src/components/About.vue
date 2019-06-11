// About.vue
<template>
  <div>
    <h1>About</h1>
    <h3>{{ (new Date()).toTimeString() }}</h3>
    <h4>조직도</h4>
  </div>
</template>
<script>
export default {
  name: "about"
};
</script>
<style>
li.company {
  color: dodgerblue;
}
li.division {
  color: lightcoral;
}
li.team {
  color: mediumorchid;
}
</style>
