<template>
  <div id="main">
    <h2 class="planes-title">{{name}}</h2>
    <p class="planes-tipo">{{tipo}}</p>
    <p class="planes-item1">{{item1}}</p>
    <p class="planes-item2">{{item2}}</p>
    <p class="planes-item3">{{item3}}</p>
    <button>SELECCIONAR PLAN</button>
  </div>
</template>

<script>
export default {
  name: "Plan",
  props: [
    "name",
    "tipo",
    "item1",
    "item2",
    "item3"
  ],
}
</script>

<style scoped>
button {
  background-color: #D90368;
  color: white;
  border-radius: 100px;
  border: 3px solid #D90368;
  padding:10px;
  cursor: pointer;
  margin-bottom:20px;
}
</style>