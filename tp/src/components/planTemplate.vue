<template>
  <div class="plan-container">
    <h2>{{data["name"]}}</h2>
    <h3>{{data["tipo"]}}</h3>
    <h4>{{data["item1"]}}</h4>
    <button>SELECCIONAR ESTE PLAN</button>
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
.plan-container{
  padding-bottom: 20px;
  margin-bottom: 20px;
}
button {
  background-color: #D90368;
  color: white;
  border-radius: 100px;
  font-size: 20px;
  border: 3px solid #D90368;
  padding:10px;
  cursor: pointer;
}
h2{
  text-transform: uppercase;
}
</style>