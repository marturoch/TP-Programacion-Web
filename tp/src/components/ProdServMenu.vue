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
@import "../assets/css/ProdServMenu.css";
</style>