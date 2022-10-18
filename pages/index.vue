<template>
  <section class="container">
    <div>
      <!-- <p>{{ $store.state.message }}</p>
      <button
        v-on:click="
          $store.dispatch('updateMessageAction', 'Dispatch with payload')
        "
      >
        Dispatch
      </button> -->
      <p>{{ $store.state.hello.message }}</p>
      <button
        v-on:click="
          $store.dispatch('hello/updateMessageAction', 'Dispatch with payload')
        "
      >
        Dispatch
      </button>
      <Counter></Counter>
      <hr />
      <Counter></Counter>
      <hr />
      <Counter></Counter>
      <hr />
    </div>
  </section>
</template>

<script>
import Counter from "~/components/Counter.vue";

export default {
  comments: {
    Counter,
  },
  components: { Counter },
};
</script>
