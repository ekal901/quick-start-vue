// src/App.vue
<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">Contact Management Application</h1>
      <p>(Dynamic Component + Vuex + Axios)</p>
    </div>
    <component :is="currentView"></component>
    <ContactList></ContactList>
  </div>
</template>

<script>
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import UpdatePhoto from "./components/UpdatePhoto";

import { mapState } from "vuex";

export default {
  name: "app",
  components: {
    ContactList,
    ContactForm,
    UpdatePhoto
  },
  computed: mapState(["currentView"])
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
</style>
