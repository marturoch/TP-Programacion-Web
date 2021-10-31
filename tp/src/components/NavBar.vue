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
#navbar-container{
  display:flex;
  background-color: darksalmon;
  justify-content:space-around;
  margin-top: 10px;
  align-items: center;
  color: black;
  width: auto;
  height: auto;

}
.menu:hover {
  background-color: lightsalmon;
  cursor: pointer;
  box-sizing: border-box;
  padding: 4px;
  position: relative;
}

</style>






