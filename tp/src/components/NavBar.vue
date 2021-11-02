<template>
  <div id="navbar-container">
    <router-link class="menu" to="/">INICIO</router-link>
    <router-link class="menu" to="/productos">PRODUCTOS</router-link>
    <router-link class="menu" to="/servicios">SERVICIOS</router-link>
    <router-link class="menu" to="/planes">PLANES</router-link>
    <router-link class="menu" to="/red-de-mascotas">RED DE MASCOTAS</router-link>
    <router-link v-if="logged" class="login" to="/login">LOG IN</router-link>
    <router-link v-if="logged === false" class="miCuenta" to="/perfil">MI CUENTA</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar.vue",
  data(){
    return{
      logged: true
    }
  }
}
</script>

<style scoped>
@import "../assets/css/NavBar.css";
</style>






