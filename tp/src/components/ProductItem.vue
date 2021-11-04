<template>
  <div>
    <div class="producto">
      <h4>{{nombre}}</h4>
      <p>{{descripcion}}</p>
      <img class="Menu-img" v-bind:src="require('../assets/img/prodServ/' + categoria + '/' + imagen)" width="100px">
      <p id="precio">{{precio}}</p>
      <p class="agregar">AGREGAR </p>
    </div>
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
  border-radius: 40px;
  padding:20px;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  flex-basis:30%;
  width: 200px;
  height: auto;
}
.producto:hover{
  cursor:pointer
}

#precio {
  font-size: 24px;
  font-family: Futura, cursive;
  color: black;
}

p{
  font-size:15px;
  text-align: justify;
}

.agregar{
  text-decoration: none;
  color:white;
  background-color: #820263;
  border-radius: 20px;
  padding:10px;
  cursor: pointer;
  align-items: flex-end;

}
.agregar:hover{
  opacity: 50%;
}
</style>