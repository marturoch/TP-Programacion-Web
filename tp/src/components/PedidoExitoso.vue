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
    <p class="p-esperando">Dentro de la próxima hora le llegará un mail para ingresar sus datos de pago!</p>
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
.p-gracias {
  font-size: 20px;
  text-align: center;
  color: black;
  font-family: inherit;
}
.p-esperando{
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
.aceptado {
  align-items: center;
}
</style>