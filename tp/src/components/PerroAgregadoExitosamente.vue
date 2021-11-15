<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <br>
    <img src="../assets/img/netcheck.png">
    <p class="p1">Tu mascota ha sido agregada a la Red de Mascotas perdidas</p>
    <br>
    <p class="p2">¡Espero que lo encuentres pronto, ahora todos estamos alerta!</p>
    <br>
    <div class="boton_volv">
      <p class="botonVolver" @click="irARed()">VOLVER A LA RED</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default {
  name: "PerroAgregadoExitosamente",
  components: {
    Header,
    NavBar,
    Footer
  },
  methods: {
    irARed() {
      this.$router.go(-1)
    },
  }
}
</script>

<style scoped>
@import "../assets/css/PerroAgregadoExitosamente.css";
</style>