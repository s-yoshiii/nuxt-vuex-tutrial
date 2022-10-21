<template></template>

<script>
export default {
  created: function () {
    this.$store.dispatch("todos/init");
  },
};
</script>

<style></style>
