// App.vue
<template>
  <div>
    <div class="header">
      <h1 class="headerText">OpenSG</h1>
      <nav>
        <ul>
          <li>
            <router-link v-bind:to="{name: 'home'}">Home</router-link>
          </li>
          <li>
            <router-link v-bind:to="{name: 'about'}">About</router-link>
          </li>
          <li>
            <router-link v-bind:to="{name: 'contact'}">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import ContactByNo from "./components/ContactByNo.vue";
import NotFound from "./components/NotFound.vue";
import VueRouter from "vue-router";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/home", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      children: [
        {
          path: ":no",
          name: "contactbyno",
          component: ContactByNo,
          // 라우트 수준의 내비게이션 보호 기능
          beforeEnter: (to, from, next) => {
            console.log(
              "@@ beforeEnter: beforeEach 다음, 그리고 beforeRouteUpdate 다음에 실행 @@" +
                from.path +
                " --> " +
                to.path
            );
            if (from.path.startsWith("/contact")) {
              // path의 url이 contact에서 시작되어야만 함
              next();
            } else {
              next("/home");
            }
          }
        }
      ]
    },
    { path: "*", component: NotFound }
  ]
});

// 전역 수준의 내비게이션 보호 기능
router.beforeEach((to, from, next) => {
  console.log("** beforeEach : 라우팅이 일어나기 전에 실행 **");
  next(); // 반드시 호출
});

router.afterEach((to, from) => {
  console.log("** afterEach : 라우팅이 일어난 후에 실행 **");
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