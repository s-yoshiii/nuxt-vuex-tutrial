<template>
  <div class="form">
    {{ todos }}
    <form v-on:submit.prevent="add">
      <input type="text" v-model="name" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
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
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos;
    },
  },
};
</script>

<style></style>
