<template>
  <div id="main">
    <h2 class="planes-title">{{name}}</h2>
    <p class="planes-tipo">{{tipo}}</p>
  </div>
</template>

<script>
export default {
  name: "Plan",
  props: [
    "name",
    "tipo"
  ],
}
</script>

<style scoped>

</style>