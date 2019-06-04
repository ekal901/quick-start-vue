// src/components/ContactList.vue
<template>
  <div>
    <table id="list">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Tel</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody id="contacts">
        <tr v-for="contact in contacts" :key="contact.no">
          <td>{{contact.no}}</td>
          <td>{{contact.name}}</td>
          <td>{{contact.tel}}</td>
          <td>{{contact.address}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ContactList",
  computed: mapState(["contacts"])
};
</script>

<style scoped>
#list {
  width: 400px;
  border: 1px solid black;
  border-collapse: collapse;
}
#list tr,
#list th {
  border: 1px solid black;
  text-align: center;
}
#list > thead > tr {
  color: white;
  background-color: cornflowerblue;
}
</style>