<template>
  <div class="counter">
    <h1>This is a counter page</h1>
    <h3>counter : {{ count }}</h3>
    <button v-on:click="onIncreaseButtonClicked">increase</button>
    <button v-on:click="onIncreaseActionButtonClicked">increase by action</button>
  </div>
</template>

<script>
import store from "../store";

export default {
  name: "Counter",
  computed: {
    count: () => store.state.count
  },
  methods: {
    onIncreaseButtonClicked: () => {
      store.commit("increment", {
        amount: 1
      });
    },
    onIncreaseActionButtonClicked: () => {
      store.dispatch("incrementAction", {
        amount: 1
      });
    }
  }
};
</script>
