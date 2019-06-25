// src/components/ContactList.vue
<template>
  <div>
    <p class="addnew">
      <!-- namedRoute를 이용해 name이 addcontact인 URI로 이동 -->
      <router-link class="btn btn-primary" :to="{name: 'addcontact'}">Add New Contact</router-link>
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
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Constant from "../Constant";
import { mapState } from "vuex";
import paginate from "vuejs-paginate";
import Velocity from "velocity-animate";
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
  mounted() {
    let page = 1;
    // $route.query를 이용해 쿼리 문자열의 page값을 읽어낸다.
    // 이 값을 이용해 초기 페이지 설정
    if (this.$route.query && this.$route.query.page) {
      page = parseInt(this.$route.query.page);
    }
    this.$store.dispatch(Constant.FETCH_CONTACTS, { pageno: page });
    this.$refs.pagebuttons.selected = page;
  },
  //
  watch: {
    $route(to, from) {
      // 새로 요청한 페이지번호 변경시
      if (to.query.page && to.query.page != this.contactlist.pageno) {
        let page = to.query.page;
        this.$store.dispatch(Constant.FETCH_CONTACTS, { pageno: page });
        this.$refs.pagebuttons.selected = page;
      }
    }
  },
  methods: {
    pageChanged(page) {
      this.$router.push({ name: "contacts", query: { page: page } });
    },
    editContact(no) {
      this.$router.push({ name: "updatecontact", params: { no: no } });
    },
    deleteContact(no) {
      if (confirm("Are you sure you want to delete?")) {
        this.$store.dispatch(Constant.DELETE_CONTACT, { no: no });
        this.$router.push({ name: "contacts" });
      }
    },
    editPhoto(no) {
      this.$router.push({ name: "updatephoto", params: { no: no } });
    },
    beforeEnter(el) {
      console.log("Before Enter");
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("Enter");
      Velocity(el, { opacity: 0, scale: 0.2 }, { duration: 200 });
      Velocity(el, { opacity: 0.7, scale: 1.2 }, { duration: 200 });
      Velocity(el, { opacity: 1, scale: 1 }, { complete: done });
    },
    leave(el, done) {
      console.log("Leave");
      Velocity(el, { translateX: "0px", opacity: 1 }, { duration: 100 });
      Velocity(
        el,
        { translateX: "20px", opacity: 1 },
        { duration: 100, loop: 2 }
      );
      Velocity(el, { translateX: "0px", opacity: 1 }, { duration: 200 });
      Velocity(el, { translateX: "100px", opacity: 0 }, { complete: done });
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
