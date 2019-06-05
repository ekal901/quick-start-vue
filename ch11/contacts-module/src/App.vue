// src/App.vue
<template>
  <div id="app">
    <Search placeholder="두글자 이상 입력 후 엔터!"/>
    <ContactList/>
  </div>
</template>

<script>
import ContactList from "./components/ContactList";
import Search from "./components/Search";
export default {
  name: "app",
  components: { ContactList, Search }
};
</script>