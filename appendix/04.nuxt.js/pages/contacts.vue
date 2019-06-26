// pages/contacts.vue
<template>
  <div>
    <h1>Contact</h1>
    <div class="wapper">
      <div class="box" v-for="c in contacts" :key="c.no">
        <nuxt-link :to="'/contacts/'+c.no">{{c.name}}</nuxt-link>
      </div>
    </div>
    <nuxt-child></nuxt-child>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "contacts",
  transition: "elastic",
  computed: mapGetters({
    contacts: "getContacts"
  })
};
</script>
<style>
.wrapper {
  background-color: #fff;
  clear: both;
  display: table;
}
.box {
  float: left;
  background-color: bisque;
  border-radius: 5px;
  padding: 10px;
  margin: 3px;
  text-align: center;
  font-size: 120%;
  width: 100px;
  font-weight: bold;
}
a:link,
a:visited {
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>