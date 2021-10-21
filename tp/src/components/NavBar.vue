<template>
  <div id="navbar-container">
    <p class="menu" v-on:click="$emit('menuEvent', 'inicio')">Inicio</p>
    <p class="menu" v-on:click="$emit('menuEvent', 'productos')">Productos</p>
    <p class="menu" v-on:click="$emit('menuEvent', 'servicios')">Servicios</p>
    <p class="menu" v-on:click="$emit('menuEvent', 'planes')">Planes</p>
    <p class="menu" v-on:click="$emit('menuEvent', 'red')">Red de Mascotas</p>
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
  justify-content:space-around;
  align-items: center;
}
</style>