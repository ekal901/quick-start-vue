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
import eventBus from "../EventBus.js";
export default {
  name: "contactForm",
  props: {
    mode: {
      type: String,
      default: "add"
    },
    contact: {
      type: Object,
      default: function() {
        return { no: "", name: "", tel: "", address: "", photo: "" };
      }
    }
  },
  mounted() {
    this.$refs.name.focus();
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
    }
  },
  methods: {
    cancelEvent() {
      eventBus.$emit("cancel");
    },
    submitEvent() {
      if (this.mode == "update") {
        eventBus.$emit("updateSubmit", this.contact);
      } else {
        eventBus.$emit("addSubmit", this.contact);
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