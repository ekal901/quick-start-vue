<template>
  <div id="app">
    <Layout>
      <h1 slot="header">Header Aria</h1>
      <div slot="sidebar">
        <ul class="menu">
          <li v-for="sidebar in sidebars" :key="sidebar.menu">
            <a v-bind:href="sidebar.link">{{sidebar.menu}}</a>
          </li>
        </ul>
      </div>
      <div slot="content">
        <h2>Content Here</h2>
        <p>Test1</p>
        <p>Test1</p>
        <p>Test1</p>
        <p>Test1</p>
      </div>
      <p slot="footer">Footer Here</p>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/NamedSlot";

export default {
  name: "app",
  components: {
    Layout
  },
  data() {
    return {
      sidebars: [
        { menu: "Home", link: "#" },
        { menu: "About", link: "#" },
        { menu: "Contact", link: "#" },
        { menu: "Vue.js", link: "#" }
      ]
    };
  }
};
</script>

<style scoped>
ul.menu {
  position: relative;
  padding: 5px;
  list-style: none;
  font-style: italic;
}
ul.menu a {
  text-decoration: none;
}
</style>
