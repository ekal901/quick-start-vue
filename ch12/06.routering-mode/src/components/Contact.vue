<template>
  <div>
    <h1>Contact</h1>
    <div class="wrapper">
      <div class="box" v-for="c in contacts" :key="c.no">
        <span @click="nagivate(c.no)" style="cursor:pointer">[{{c.name}}]</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import contactlist from "../ContactList";
export default {
  name: "Contact",
  data() {
    return {
      contacts: contactlist.contacts
    };
  },
  methods: {
    nagivate(no) {
      if (confirm("Would you like to see detail?")) {
        this.$router.push(
          { name: "contactbyno", params: { no: no } }, //location
          function() {
            //completeCallback
            console.log("success changing view to /contact/" + no);
          }
        );
      }
    }
  }
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
  background-color: lavender;
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