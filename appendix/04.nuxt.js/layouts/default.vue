// layouts/default.vue
<template>
  <div>
    <div class="header">
      <h1 class="headerText">OpenSG</h1>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contacts">Contact</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script>
export default {
  name: "default"
};
</script>

<style scoped>
.header {
  background-color: lightcoral;
  padding: 10px 0px 0px 0px;
}
.headerText {
  padding: 0px 20px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: lightgoldenrodyellow;
}
li {
  float: left;
}
li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover {
  background-color: gold;
  color: black;
}
</style>
