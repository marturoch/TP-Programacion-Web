<template>
  <div>
    <div id="header_1">
      <div class="cuentaYcarrito">
        <router-link v-if="status!=='logged'" class="login" to="/login">INGRESAR/REGISTRARSE</router-link>
        <router-link v-if="status==='logged'" class="miCuenta" to="/perfil">Mi Cuenta</router-link>
        <router-link v-if="status==='logged'" class="carrito" to="/carrito">CARRITO</router-link>
        <router-link v-if="status==='logged'" class="carrito" to="/minicarrito">MINICARRITO</router-link>
      </div>
    </div>
    <div id="header_2">
      <router-link to="/">
        <img src="../assets/img/logo.png" alt="logo" width="200px">
      </router-link>
      <div id = "name">
        <h1>DOG CARE ·</h1>
      </div>
      <div id="subtitle">
        <h2>Seguros para Perros</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header.vue",
  data() {
    return {
      status: localStorage.getItem('status')
    }
  }
}
</script>

<style scoped>
@import "../assets/css/header.css";

</style>