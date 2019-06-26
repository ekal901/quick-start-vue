// pages/contacts/_no.vue
<template>
  <div>
    <h1>Contact Detail</h1>
    <div>
      <table class="detail table table-bordered">
        <tbody>
          <tr class="active">
            <td>Serial Number</td>
            <td>{{contact.no}}</td>
          </tr>
          <tr class="active">
            <td>Name</td>
            <td>{{contact.name}}</td>
          </tr>
          <tr class="active">
            <td>Tel</td>
            <td>{{contact.tel}}</td>
          </tr>
          <tr class="active">
            <td>Address</td>
            <td>{{contact.address}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Constant from "~/constant";

export default {
  name: "contactbyno",
  computed: mapGetters({
    contact: "getContactOne"
  }),
  created() {
    var no = this.$route.params.no;
    this.$store.commit(Constant.CHANGE_NO, { no: no });
  }
};
</script>

<style>
table.detail {
  width: 400px;
}
</style>