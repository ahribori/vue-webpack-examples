<template>
  <div>
    <h2>Parent</h2>
    <child message="message from parent"></child>
  </div>
</template>

<script>
  import Child from '../components/Child';
  export default {
    name: "Parent",
    components: {
      Child,
    }
  }
</script>

<style scoped>

</style>