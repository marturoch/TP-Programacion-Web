<template>
  <div>
    <router-link v-bind:to="'/' + tipo + '/' + name" title="ver mas detalles" id="main">
      <div class="producto">
        <h2 class="prodServ-title">{{name}}</h2>
        <img class="prodServ-img" v-bind:src="require('../assets/img/prodServ/' + image)" width="200px">
      </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: "ProdServMenu",
  props: [
      "name",
      "image",
      "description",
      "tipo"
  ],
  data(){
    return {
      productAlt: "Foto Producto/Servicio"
    }
  }
}
</script>

<style scoped>
#main {
  margin:10px;
  align-content: center;
  display: inline-block;
  cursor: pointer;
}
h2{
  text-transform: uppercase;
}
.producto{
  padding:10px;
  border:2px solid black;
  border-radius:20px;
  height:300px;
  background-color: white;
}
.producto:hover{
  opacity: 80%;
}
</style>