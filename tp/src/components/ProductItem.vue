<template>
<div class="producto">
  <h4>{{nombre}}</h4>
  <p>{{descripcion}}</p>
  <img class="Menu-img" v-bind:src="require('../assets/img/prodServ/' + categoria + '/' + imagen)" width="100px">
  <p>{{precio}}</p>
</div>
</template>

<script>
export default {
  name: "ProductItem",
  props:[
      "categoria",
      "nombre",
      "imagen",
      "precio",
      "descripcion"
  ]
}
</script>

<style scoped>
.producto{
  border:4px solid #820263;
  background-color: white;
  border-radius: 100px;
  padding:20px;
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
p{
  font-size:15px;
}
</style>