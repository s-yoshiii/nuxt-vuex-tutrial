<template>
  <div class="form">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span v-if="todo.create">
          <input
            type="checkbox"
            v-bind:checked="todo.done"
            @change="toggle(todo)"
          />
          <span v-bind:class="{ done: todo.done }"
            >{{ todo.name }} {{ todo.create.toDate() | dateFilter }}</span
          >
          <button type="button" v-on:click="remove(todo.id)">Delete</button>
        </span>
      </li>
    </ul>
    <form v-on:submit.prevent="add">
      <input type="text" v-model="name" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data: function () {
    return {
      name: "",
      done: false,
    };
  },
  created: function () {
    this.$store.dispatch("todos/init");
  },
  methods: {
    add() {
      this.$store.dispatch("todos/add", this.name);
      this.name = "";
    },
    remove(id) {
      this.$store.dispatch("todos/remove", id);
    },
    toggle(todo) {
      this.$store.dispatch("todos/toggle", todo);
    },
  },
  computed: {
    todos() {
      return this.$store.getters["todos/orderdTodos"];
    },
  },
  filters: {
    dateFilter: function (date) {
      return moment(date).format("YYYY/MM/DD HH:mm:ss");
    },
  },
};
</script>

<style>
li > span span.done {
  text-decoration: line-through;
}
</style>
