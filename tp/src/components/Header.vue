<template>
  <div>
    <div id="header_1">
      <p>ENVIO SIN CARGO EN COMPRAS SUPERIORES A $6.000</p>
      <img src="../assets/img/botones/facebook.png" width="50px" style="float:right;">
      <img src="../assets/img/botones/instagram.png" width="50px" style="float:right;">
      <img src="../assets/img/botones/whatsapp.png" width="50px" style="float:right;">
    </div>
    <div id="header_2">
      <router-link to="/">
        <img src="../assets/img/logo.png" alt="logo" width="200px">
      </router-link>
      <div id = "name">
        <h1 >DOG CARE ·</h1>
      </div>
      <div id="subtitle">
        <h2>Seguros Para Perros</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header.vue",
}
</script>

<style scoped>
@import "../assets/css/header.css";

</style>