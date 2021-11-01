<template>
  <div id="navbar-container">
    <router-link class="menu" to="/">Inicio</router-link>
    <router-link class="menu" to="/productos">Productos</router-link>
    <router-link class="menu" to="/servicios">Servicios</router-link>
    <router-link class="menu" to="/planes">Planes</router-link>
    <router-link class="menu" to="/red-de-mascotas">Red de Mascotas</router-link>
    <router-link class="login" to="/login">LOG IN</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar.vue"
}
</script>

<style scoped>
@import "../assets/css/NavBar.css";
</style>






