<template>
  <div id="navbar-container">
    <router-link class="menu" to="/">INICIO</router-link>
    <router-link class="menu" to="/productos">PRODUCTOS</router-link>
    <router-link class="menu" to="/servicios">SERVICIOS</router-link>
    <router-link class="menu" to="/planes">PLANES</router-link>
    <router-link class="menu" to="/red-de-mascotas">RED DE MASCOTAS</router-link>
      </div>
</template>

<script>
export default {
  name: "NavBar.vue",
  data(){
    return{
      logged: false,}
  }
}
</script>

<style scoped>
@import "../assets/css/NavBar.css";
</style>






