<template>
<div class="rechazado">
  <Header></Header>
  <br>
  <p>EL PEDIDO HA SIDO RECHAZADO</p><br>
  <p>No hemos podido registrar tu orden, prueba de nuevo en otro momento</p>
  <br>
  <img src="../assets/img/carritos/cross.png">
  <br>
  <p class="botonVolver" @click="irAlInicio()">VOLVER AL INICIO</p>
  <Footer></Footer>
</div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "PedidoRechazado",
  components: {
    Header,
    Footer
  },
  methods: {
    irAlInicio() {
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
@import "../assets/css/PedidoRechazado.css";
</style>