<template>
  <div id="navbar-container">
    <router-link to="/">Inicio</router-link>
    <router-link to="/productos">Productos</router-link>
    <router-link to="/servicios">Servicios</router-link>
    <router-link to="/planes">Planes</router-link>
    <router-link to="/red-de-mascotas">Red de Mascotas</router-link>
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






