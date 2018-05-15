<template>
  <div>
    <h2>Child</h2>
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: "Child",
    props: {
      message: String,
    }
  }
</script>

<style scoped>

</style>