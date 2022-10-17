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
    </div>
  </section>
</template>

<script>
export default {};
</script>
