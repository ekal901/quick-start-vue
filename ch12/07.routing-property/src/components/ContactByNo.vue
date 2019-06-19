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
  // 컴포넌트 수준에서의 내비게이션 보호 기능
  beforeRouteUpdate(to, from, next) {
    console.log(
      "** beforeRouteUpdate : 처음에는 호출안되고 그 다음부터 no가 바뀌면 호출 **"
    );
    this.no = to.params.no;
    // 전역 수준의 내비게이션 보호 기능
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(
      "** beforeRouteLeave : 현재 경로에서 다른 경로로 빠져나갈 때 쓰는 훅**" +
        from.path +
        " --> " +
        to.path
    );
    next();
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
