// AppAxiosTest.vue
<template>
  <div id="app">
    <div class="container">
      <div class="form-group">
        <button @click="fetchContacts">page 1 contacts read</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="name" placeholder="name">
        <input type="text" v-model="tel" placeholder="phonenumber">
        <input type="text" v-model="address" placeholder="address">
        <button @click="addContact">Add</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no">
        <button @click="fetchContactOne">1 Contact read</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no">
        <input type="text" v-model="name" placeholder="name">
        <input type="text" v-model="tel" placeholder="phonenumber">
        <input type="text" v-model="address" placeholder="address">
        <button @click="updateContact">Update</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no">
        <button @click="deleteContact">Delete</button>
      </div>
      <div class="form-group">
        <input type="text" v-model="no">
        <input type="file" ref="photofile" name="photo">
        <button @click="changePhoto">change Photo</button>
      </div>
    </div>
    <span>JSON Type</span>
    <div id="result" class="container">
      <xmp>{{result}}</xmp>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      no: 0,
      name: "",
      tel: "",
      address: "",
      result: null
    };
  },
  methods: {
    fetchContacts() {
      // axios 저수준 메서드
      // 모든 전달값을 config 객체로 전달
      // API 호출 후 리턴 되는 객체는 Promise 객체
      axios
        .get("/api/contacts", {
          params: { pageno: 1, pagesize: 5 }
        })
        .then(response => {
          console.log(response);
          this.result = response.data;
        })
        .catch(ex => {
          console.log("ERROR : " + ex);
        });
    },
    addContact() {
      axios
        .post("/api/contacts", {
          name: this.name,
          tel: this.tel,
          address: this.address
        })
        .then(response => {
          this.result = response.data;
          this.no = response.data.no;
        })
        .catch(ex => {
          console.log("POST addContact ERROR: " + ex);
        });
    },
    fetchContactOne() {
      this.$axios.get("/api/contacts/" + this.no).then(response => {
        this.result = response.data;
      });
    },
    updateContact() {
      axios
        .put("/api/contacts/" + this.no, {
          name: this.name,
          tel: this.tel,
          address: this.address
        })
        .then(response => {
          this.name = "";
          this.tel = "";
          this.address = "";
          this.result = response.data;
        })
        .catch(ex => {
          console.log("PUT updateContact ERROR: ", ex);
        });
    },
    deleteContact() {
      axios
        .delete("/api/contacts/" + this.no)
        .then(response => {
          this.no = 0;
          this.result = response.data;
        })
        .catch(ex => {
          console.log("DELETE deleteContact ERROR: ", ex);
        });
    },
    changePhoto() {
      var data = new FormData();
      var file = this.$refs.photofile.files[0];
      data.append("photo", file);
      axios
        .post("/api/contacts/" + this.no + "/photo", data)
        .then(response => {
          this.result = response.data;
        })
        .catch(ex => {
          console.log("updatePhoto Failed", ex);
        });
    }
  }
};
</script>
<style>
@import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  border: solid 1px black;
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
}
#result {
  text-align: left;
  padding: 20px;
  border: solid 1px black;
}
.form-group {
  border: 1px solid black;
  padding: 5px 5px 5px 20px;
}
</style>

