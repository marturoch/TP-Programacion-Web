<template>
  <div>
    <Header></Header>
    <div>
      <br>
      <img src="../assets/img/notfound.svg" class="notfound">
      <h2>Esta página no está disponible</h2>
      <h3>Es posible que el enlace esté roto o que se haya eliminado la página</h3>
      <h3>Verifica que el enlace que quieres abrir es correcto.</h3>
      <br>
      <router-link :to="{name:'Home'}" class="volver">Volver al Inicio</router-link>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"
export default {
  name: "NotFoundView",
  components: {
    Header
  }
}
</script>

<style scoped>
@import "../assets/css/notFoundView.css";
</style>