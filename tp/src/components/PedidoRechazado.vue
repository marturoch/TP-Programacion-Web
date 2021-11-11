<template>
<div class="rechazado">
  <Header></Header>
  <br>
  <p>EL PEDIDO HA SIDO RECHAZADO</p>
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

p {
  font-size: 20px;
  text-align: center;
  color: black;
  font-family: inherit;
}
.botonVolver {
  width: auto;
  color: white;
  background-color: #820263;
  border: solid 1px;
  border-color: #820263;
  border-radius: 100px;
  padding: 20px;
}
.botonVolver:hover {
  cursor: pointer;
}
.rechazado {
  align-items: center;
}
</style>