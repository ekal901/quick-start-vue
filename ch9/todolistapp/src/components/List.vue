<template>
  <ul id="todolist">
    <li v-for="a in todolist" :key="a.id" :class="checked(a.done)" @click="doneToggle(a.id)">
      <span>{{a.todo}}</span>
      <span v-if="a.done">(done)</span>
      <span class="close" @click.stop="deleteTodo(a.id)">&#x00D7;</span>
    </li>
  </ul>
</template>

<script>
import eventBus from "../EventBus";
export default {
  data() {
    return {
      todolist: [
        { id: 1, todo: "Watching Movie", done: false },
        { id: 2, todo: "Walking", done: true },
        { id: 3, todo: "ES6 Study", done: false },
        { id: 4, todo: "Basketball Game", done: false }
      ]
    };
  },
  created() {
    eventBus.$on("add-todo", this.addTodo);
  },
  methods: {
    checked(done) {
      if (done) {
        return { checked: true };
      } else {
        return { checked: false };
      }
    },
    addTodo(todo) {
      if (todo !== "") {
        this.todolist.push({
          id: new Date().getTime(),
          todo: todo,
          done: false
        });
      }
    },
    doneToggle(id) {
      var index = this.todolist.findIndex(item => {
        item.id === id;
      });
      this.todolist[index].done = !this.todolist[index].done;
    },
    deleteTodo(id) {
      var index = this.todolist.findIndex(item => {
        item.id === id;
      });
      this.todolist.splice(index, 1);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  cursor: pointer;
  position: relative;
  padding: 8px 8px 8px 40px;
  background: #eee;
  font-size: 14px;
  transition: 0.2s;
  -webkit-user-select: none;
  user-select: none;
}
ul li:hover {
  background: #ddd;
}
ul li:checked {
  background: #bbb;
  color: fff;
  text-decoration: line-through;
}
ul li:checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0px 1px 1px 0px;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 8px;
  width: 8px;
}
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px 12px;
}
.close:hover {
  background-color: #f44336;
  color: white;
}
</style>
