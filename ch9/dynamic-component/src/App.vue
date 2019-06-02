// App.vue
<template>
  <div>
    <div class="header">
      <h1 class="headerText">OpenSG</h1>
      <nav>
        <ul>
          <li>
            <a href="#" @click="changeMenu('home')">Home</a>
          </li>
          <li>
            <a href="#" @click="changeMenu('about')">About</a>
          </li>
          <li>
            <a href="#" @click="changeMenu('contact')">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <!-- include 특성을 부여할 경우 about, home 컴포넌트에 name 속성 반드시 부여 -->
      <!-- about과 home은 캐싱되어서 매번 실행되지 않음, include 선언시 콤마는 붙여서! -->
      <keep-alive include="about,home">
        <component :is="currentView"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "app",
  components: {
    Home,
    About,
    Contact
  },
  data() {
    return {
      currentView: "home"
    };
  },
  methods: {
    changeMenu(view) {
      this.currentView = view;
    }
  }
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
