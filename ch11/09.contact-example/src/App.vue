// src/App.vue
// 자식 컴포넌트들이 필요로 하는 데이터를 data 옵션을 이용해 중앙집중화하여 저장, 관리하고
// 하위 컴포넌트들에게 props를 통해서 전달
<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">Contact Management Application</h1>
      <p>(Dynamic Component + Eventbus + Axios)</p>
    </div>
    <!-- dynamic component -->
    <component :is="currentView" :contact="contact"></component>
    <!-- static component -->
    <contactList :contactlist="contactlist"></contactList>
  </div>
</template>

<script>
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import UpdateContact from "./components/UpdateContact";
import UpdatePhoto from "./components/UpdatePhoto";
import CONF from "./Config.js";
import eventBus from "./EventBus.js";
export default {
  name: "app",
  components: {
    ContactList,
    AddContact,
    UpdateContact,
    UpdatePhoto
  },
  data() {
    return {
      currentView: null,
      contact: { no: 0, name: "", tel: "", address: "", photo: "" },
      contactlist: {
        pageno: 1,
        pagesize: CONF.PAGESIZE,
        totalcount: 0,
        contacts: []
      }
    };
  },
  mounted() {
    // 이벤트 수신 기능
    this.fetchContacts(); // 처음 실행시 연락처 목록
    eventBus.$on("cancel", () => {
      this.currentView = null;
    });
    eventBus.$on("addSubmit", contact => {
      this.currentView = null;
      this.addContact(contact);
    });
    eventBus.$on("updateSubmit", contact => {
      this.currentView = null;
      this.UpdateContact(contact);
    });
    eventBus.$on("addContactForm", () => {
      this.currentView = "addContact";
    });
    eventBus.$on("editContactForm", no => {
      this.fetchContactOne(no);
      this.currentView = "updateContact";
    });
    eventBus.$on("deleteContact", no => {
      this.deleteContact(no);
    });
    eventBus.$on("editPhoto", no => {
      this.fetchContactOne(no);
      this.currentView = "updatePhoto";
    });
    eventBus.$on("updatePhoto", (no, file) => {
      if (typeof file !== "undefined") {
        this.updatePhoto(no, file);
      }
      this.currentView = null;
    });
    eventBus.$on("pageChanged", page => {
      this.pageChanged(page);
    });
  },
  methods: {
    // 필요 기능 정의
    pageChanged(page) {
      this.contactlist.pageno = page;
      this.fetchContacts();
    },
    fetchContacts() {
      this.$axios
        .get(CONF.FETCH, {
          params: {
            pageno: this.contactlist.pageno,
            pagesize: this.contactlist.pagesize
          }
        })
        .then(response => {
          this.contactlist = response.data;
        })
        .catch(ex => {
          console.log("fetchContacts Failed", ex);
          this.contactlist = [];
        });
    },
    addContact(contact) {
      this.$axios
        .post(CONF.ADD, contact)
        .then(response => {
          if (response.data.status === "success") {
            this.contactlist.pageno = 1; // move to page 1
            this.fetchContacts();
          } else {
            console.log("Contact Add Failed: " + response.data.message);
          }
        })
        .catch(ex => {
          console.log("Add Contact Failed", ex);
        });
    },
    UpdateContact(contact) {
      this.$axios
        .put(CONF.UPDATE.replace("${no}", contact.no), contact)
        .then(response => {
          if (response.data.status === "success") {
            this.fetchContacts();
          } else {
            console.log("Update Contact Failed: " + response.data.message);
          }
        })
        .catch(ex => {
          console.log("Update Contact Failed", ex);
        });
    },
    fetchContactOne(no) {
      this.$axios
        .get(CONF.FETCH_ONE.replace("${no}", no))
        .then(response => {
          this.contact = response.data;
        })
        .catch(ex => {
          console.log("FetchContactOne Failed", ex);
        });
    },
    deleteContact(no) {
      this.$axios
        .delete(CONF.DELETE.replace("${no}", no))
        .then(response => {
          if (response.data.status === "success") {
            this.fetchContacts();
          } else {
            console.log("deleteContact Failed: " + response.data.message);
          }
        })
        .catch(ex => {
          console.log("deleteContact Failed", ex);
        });
    },
    updatePhoto(no, file) {
      var data = new FormData();
      data.append("photo", file);
      this.$axios
        .post(CONF.UPDATE_PHOTO.replace("${no}", no), data)
        .then(response => {
          if (response.data.status === "success") {
            this.fetchContacts();
          } else {
            console.log("updatePhoto Failed: " + response.data.message);
          }
        })
        .catch(ex => {
          console.log("updatePhoto Failed", ex);
        });
    }
  }
};
</script>

<style scoped>
#container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
