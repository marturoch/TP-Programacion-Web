<template>
  <div id="navbar-container">
    <p class="menu" v-on:click="$emit('menuEvent', 'inicio')">Inicio</p>
    <p class="menu" v-on:click="$emit('menuEvent', 'productos')">Productos</p>
    <p class="menu" v-on:click="$emit('menuEvent', 'servicios')">Servicios</p>
    <router-link to="/planes">Planes</router-link>
    <router-link to="/red-de-mascotas">Red de Mascotas</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar.vue",
  data(){
  }
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



