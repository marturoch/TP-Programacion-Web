<template>
    <div id="main">
        <h2 class="prodServ-title">{{name}}</h2>
        <img class="prodServ-img" v-bind:src="require('../assets/img/prodServ/' + image)" width="200px">
        <br>
        <p class="product-description">{{description}}</p>
    </div>
</template>

<script>
export default {
  name: "ProdServMenu",
  props: [
      "name",
      "image",
      "description"
  ],
  data(){
    return{
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
}
</style>