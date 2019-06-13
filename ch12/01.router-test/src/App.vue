// App.vue
<template>
  <div>
    <div class="header">
      <h1 class="headerText">OpenSG</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/home">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import VueRouter from "vue-router";

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact }
  ]
});

export default {
  name: "app",
  router
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
