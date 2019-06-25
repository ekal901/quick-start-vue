// src/components/ContactForm.vue
<template>
  <div class="modal">
    <div class="form" @keyup.esc="cancelEvent">
      <h3 class="heading">:: {{headingText}}</h3>
      <div v-if="mode == 'update'" class="form-group">
        <label>Serial Number</label>
        <input type="text" name="no" class="long" v-model="contact.no" disabled>
      </div>
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          class="long"
          v-model="contact.name"
          ref="name"
          placeholder="Name Here"
        >
      </div>
      <div class="form-group">
        <label>Tel</label>
        <input type="text" name="tel" class="long" v-model="contact.tel" placeholder="Tel Here">
      </div>
      <div class="form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          class="long"
          v-model="contact.address"
          placeholder="Address Here"
        >
      </div>
      <div class="form-group">
        <div>&nbsp;</div>
        <input type="button" class="btn btn-primary" :value="btnText" @click="submitEvent()">
        <input type="button" class="btn btn-primary" value="Cancel" @click="cancelEvent()">
      </div>
    </div>
  </div>
</template>

<script>
import Constant from "../Constant";
import { mapState } from "vuex";

export default {
  name: "contactForm",
  // 라우트 정보 지정시 props:true로 선언되어
  // /contacts/update/:no 경로로 전달되는 :no 위치의 값이 no 속성(props)로 전달됨
  props: ["no"],
  data() {
    return {
      // 지역 데이터 옵션 처리
      mode: "add"
    };
  },
  computed: {
    headingText() {
      if (this.mode != "update") {
        return "Add new Contact";
      } else {
        return "Update Contact";
      }
    },
    btnText() {
      if (this.mode != "update") {
        return "ADD";
      } else {
        return "UPDATE";
      }
    },
    ...mapState(["contact", "contactlist"])
  },
  // 기본값을 'add'로 설정하고 mounted 이벤트 훅에서
  // URI 경로의 문자열에 /add, /update 문자열의 포함 여부를 확인해 mode 데이터 옵션을 설정
  mounted() {
    this.$refs.name.focus();
    let currentRoute = this.$router.currentRoute;
    if (currentRoute.fullPath.indexOf("/add") > -1) {
      this.mode = "add";
      this.$store.dispatch(Constant.INITIALIZE_CONTACT_ONE);
    } else if (currentRoute.fullPath.indexOf("/update" > -1)) {
      this.mode = "update";
      this.$store.dispatch(Constant.FETCH_CONTACT_ONE, { no: this.no });
    }
  },
  methods: {
    cancelEvent() {
      this.$router.push({
        name: "contacts",
        query: { page: this.contactlist.pageno }
      });
    },
    submitEvent() {
      if (this.mode == "update") {
        this.$store.dispatch(Constant.UPDATE_CONTACT);
        this.$router.push({
          name: "contacts",
          query: { page: this.contactlist.pageno }
        });
      } else {
        this.$store.dispatch(Constant.ADD_CONTACT);
        this.$router.push({
          name: "contacts",
          query: { page: 1 }
        });
      }
    }
  }
};
</script>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.form {
  background-color: white;
  margin: 100px auto;
  max-width: 400px;
  min-width: 200px;
  font: 13px "verdana";
  padding: 10px;
}
.form div {
  padding: 0;
  display: block;
  margin: 10px 0 0 0;
}
.form label {
  text-align: left;
  margin: 0 0 3px 0;
  padding: 0px;
  display: block;
  font-weight: bold;
}
.form input,
textarea,
select {
  box-sizing: border-box;
  border: 1px solid #bebebe;
  padding: 7px;
  margin: 0px;
  outline: none;
}
.form .long {
  width: 100%;
}
.form .button {
  background: #2b798d;
  padding: 8px 15px;
  border: none;
  color: #fff;
}
.form .button:hover {
  background: #4691a4;
}
.form .heading {
  background: #33a17f;
  font-weight: 300;
  text-align: left;
  padding: 20px;
  color: #fff;
  margin: 5px 0 30px 0;
  padding: 10px;
  min-width: 200px;
  max-width: 400px;
}
</style>