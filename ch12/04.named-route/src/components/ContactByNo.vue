<template>
  <div>
    <hr class="divider">
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
import contactlist from "../ContactList";
export default {
  name: "ContactByNo",
  data() {
    return {
      no: 0,
      contacts: contactlist.contacts
    };
  },
  created() {
    this.no = this.$route.params.no;
  },
  watch: {
    $route(to, from) {
      // to: 현재 route 객체
      // from: 이전의 route 객체
      this.no = to.params.no;
    }
  },
  computed: {
    contact() {
      var no = this.no;
      var arr = this.contacts.filter(item => {
        return item.no == no;
      });
      if (arr.length == 1) {
        return arr[0];
      } else {
        return {};
      }
    }
  }
};
</script>

<style>
table.detail {
  width: 400px;
}
.divider {
  height: 3px;
  margin-left: auto;
  margin-right: auto;
  background-color: #999999;
  color: #ff0066;
  border: 0 none;
}
</style>
