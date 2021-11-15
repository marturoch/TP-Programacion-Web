<template>
  <div class="aceptado">
    <Header></Header>
    <br>
    <p class="p-gracias">GRACIAS POR COMPRAR EN DOG-CARE</p>
    <br>
    <p class="p-esperando">Estamos elaborando su pedido</p>
    <br>
    <img src="../assets/img/carritos/check.png">
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
@import "../assets/css/PedidoExitoso.css";
</style>