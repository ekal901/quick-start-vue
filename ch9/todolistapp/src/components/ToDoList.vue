<template>
  <div id="todolistapp">
    <div id="header" class="header">
      <h2>To Do List</h2>
      <InputTodo></InputTodo>
    </div>
    <list></list>
  </div>
</template>

<script>
import InputTodo from "./InputTodo";
import List from "./List";
export default {
  name: "ToDoList",
  components: {
    InputTodo,
    List
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
.header {
  background-color: lightpink;
  padding: 30px;
  color: mintcream;
  text-align: center;
}
.header::after {
  content: "";
  display: table;
  clear: both;
}
</style>