// src/App.vue
<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">Contact Management Application</h1>
      <p>(Vue-router + Vuex + Axios)</p>
      <div class="btn-group">
        <router-link to="/home" class="btn btn-info menu">Home</router-link>
        <router-link to="/about" class="btn btn-info menu">About</router-link>
        <router-link to="/contacts" class="btn btn-info menu">Contacts</router-link>
      </div>
    </div>
    <transition name="flip" mode="out-in">
      <router-view></router-view>
    </transition>
    <Loading v-show="isloading"></Loading>
  </div>
</template>

<script>
import Loading from "./components/Loading.vue";
import { mapState } from "vuex";
export default {
  name: "app",
  components: { Loading },
  computed: mapState(["isloading"])
};
</script>

<style scoped>
#container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flip-enter-active {
  transition: all 0.4s ease-in-out;
}
.flip-leave-active {
  transition: all 0.4s ease-in-out;
}
.flip-enter,
.flip-leave {
  transform: scaleX(0) translateZ(0);
  opacity: 0;
}
</style>
