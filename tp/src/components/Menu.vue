<template>
<div class="producto">
  <h4>{{nombre}}</h4>
  <p>{{precio}}</p>
  <img class="Menu-img" v-bind:src="require('../assets/img/prodServ/' + categoria + '/' + imagen)" width="100px">
</div>
</template>

<script>
export default {
  name: "Menu",
  props:[
      "categoria",
      "nombre",
      "imagen",
      "precio"
  ]
}
</script>

<style scoped>
.producto{
  border:3px dotted black;
  background-color: white;
  border-radius: 100px;
  padding:15px;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  flex-basis:30%;
}
.producto:hover{
  opacity: 60%;
  cursor:pointer
}
</style>