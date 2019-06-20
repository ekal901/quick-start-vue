// src/components/ContactList.vue
<template>
  <div>
    <p class="addnew">
      <button class="btn btn-primary" @click="addContact()">Add New Contact</button>
    </p>
    <div id="example">
      <table id="list" class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Tel</th>
            <th>Address</th>
            <th>Photo</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody id="contacts">
          <tr v-for="contact in contactlist.contacts" :key="contact.no">
            <td>{{contact.name}}</td>
            <td>{{contact.tel}}</td>
            <td>{{contact.address}}</td>
            <td>
              <img class="thumbnail" :src="contact.photo" @click="editPhoto(contact.no)">
            </td>
            <td>
              <button class="btn btn-info" @click="editContact(contact.no)">Edit</button>
              <button class="btn btn-light" @click="deleteContact(contact.no)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <paginate
      ref="pagebuttons"
      :page-count="totalpage"
      :page-range="7"
      :margin-pages="3"
      :click-handler="pageChanged"
      :prev-text="'prev'"
      :next-text="'next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    ></paginate>
  </div>
</template>

<script>
import Constant from "../Constant";
import { mapState } from "vuex";
import paginate from "vuejs-paginate";
export default {
  name: "contactList",
  components: { paginate },
  computed: {
    totalpage() {
      return (
        Math.floor(
          (this.contactlist.totalcount - 1) / this.contactlist.pagesize
        ) + 1
      );
    },
    ...mapState(["contactlist"])
  },
  watch: {
    ["contactlist.pageno"]: function() {
      this.$refs.pagebuttons.selected = this.contactlist.pageno - 1;
    }
  },
  mounted() {
    this.$store.dispatch(Constant.FETCH_CONTACTS, { pageno: 1 });
  },
  methods: {
    pageChanged(page) {
      this.$store.dispatch(Constant.FETCH_CONTACTS, { pageno: page });
    },
    addContact() {
      this.$store.dispatch(Constant.ADD_CONTACT_FORM);
    },
    editContact(no) {
      this.$store.dispatch(Constant.EDIT_CONTACT_FORM, { no: no });
    },
    deleteContact(no) {
      if (confirm("Are you sure you want to delete?")) {
        this.$store.dispatch(Constant.DELETE_CONTACT, { no: no });
      }
    },
    editPhoto(no) {
      this.$store.dispatch(Constant.EDIT_PHOTO_FORM, { no: no });
    }
  }
};
</script>

<style scoped>
.addnew {
  margin: 10px auto;
  max-width: 820px;
  min-width: 820px;
  padding: 40px 0px 0px 0px;
  text-align: left;
}
#example {
  margin: 10px auto;
  max-width: 820px;
  min-width: 820px;
  padding: 0px;
  position: relative;
  font: 14px "verdana";
}
#example .long {
  width: 100%;
}
#example .short {
  width: 50%;
}
#example input,
textarea,
select {
  box-sizing: border-box;
  border: 1px solid #bebebe;
  padding: 7px;
  margin: 0px;
  outline: none;
}
#list {
  width: 800px;
  font: 13px "verdana";
}
#list thead tr {
  color: white;
  background-color: lightcoral;
}
#list th:nth-child(5n + 1),
td:nth-child(5n + 1) {
  width: 200px;
}
#list th:nth-child(5n + 2),
td:nth-child(5n + 2) {
  width: 150px;
}
#list th:nth-child(5n + 3),
td:nth-child(5n + 3) {
  width: 250px;
}
#list th:nth-child(5n + 4),
td:nth-child(5n + 4) {
  width: 60px;
}
#list th:nth-child(5n),
td:nth-child(5n) {
  width: 150px;
}
#list th {
  padding: 10px 5px;
}
#list tr {
  border-bottom: solid 1px black;
}
#list td,
#list th {
  text-align: center;
  vertical-align: middle;
}
img.thumbnail {
  width: 48px;
  height: 48px;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  cursor: pointer;
}
</style>
