// src/App.vue
<template>
  <div id="app">
    <RegionButtons/>
    <CountryList/>
  </div>
</template>

<script>
import RegionButtons from "./components/RegionButtons";
import CountryList from "./components/CountryList";
export default {
  name: "app",
  components: { RegionButtons, CountryList }
};
</script>

<style>
</style>
