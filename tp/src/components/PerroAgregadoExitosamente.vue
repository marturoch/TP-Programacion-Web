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
    <p class="botonVolver" @click="irARed()">VOLVER A LA RED</p>
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

.p1 {
  font-size: 35px;
  color: black;
  text-align: center;
  display: block;
}
.p2 {
  font-size: 25px;
  color: black;
  text-align: center;
  display: block;
}
img {
  width: 400px;
  height: 400px;
}
.botonVolver{
  cursor:pointer;
  border-radius:50%;
  text-align: center;
  width:90px;
  height:90px;
  background-color: #820263;
  color:white;
  padding:12px;
  margin-top:40px;
  font-size:12px;
}
.botonVolver:hover {
  opacity: 60%;
}
</style>