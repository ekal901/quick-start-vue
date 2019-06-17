<template>
  <div>
    <h1>Contact</h1>
    <div class="wrapper">
      <div class="box" v-for="c in contacts" :key="c.no">
        <router-link v-bind:to="'/contact/'+c.no">{{c.name}}</router-link>
      </div>
    </div>
    <!-- 자식 컴포넌트인 ContactByNo를 렌더링 하도록 router-view 추가 -->
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