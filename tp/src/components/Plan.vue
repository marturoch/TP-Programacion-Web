<template>
    <div class="planes">
      <div>
        <h2 class="planes-title">{{name}}</h2>
        <p class="planes-info">{{tipo}}</p>
        <p class="planes-info">{{item1}}</p>
        <p class="planes-info">{{item2}}</p>
        <p class="planes-info">{{item3}}</p>
      </div>
      <router-link class="seleccionar" v-bind:to="/planes/ + name" >SELECCIONAR ESTE PLAN</router-link>
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
.planes-title{
  text-transform: uppercase;
}
.seleccionar{
  text-decoration: none;
  color:white;
  background-color: #820263;
  border-radius: 20px;
  padding:10px;
}
</style>