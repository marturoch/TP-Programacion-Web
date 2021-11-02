<template>
  <div class="plan-container">
    <h2>{{data["name"]}}</h2>
    <h3>{{data["tipo"]}}</h3>
    <h4>{{data["item1"]}}</h4>
  </div>
</template>

<script>
export default {
  name: "planTemplate",
  props: {
    data: Object
  }
}
</script>

<style scoped>
</style>