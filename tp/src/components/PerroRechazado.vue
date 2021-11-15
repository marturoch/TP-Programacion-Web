<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <img src="../assets/img/netfail.png">
    <p>Tu mascota no ha podido integrarse a la Red de Mascotas</p>
    <p>Intente de nuevo más tarde</p>
    <router-link :to="{name:'RedView'}" class="reintentar">REINTENTAR</router-link>
    <br>
    <div class="contenedor-cartas">
      <dog-card/>
      <dog-card/>
      <dog-card/>
      <dog-card/>
      <dog-card/>
      <dog-card/>
    </div>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import dogCard from "./dogCard";
import Footer from "./Footer";

export default {
  name: "PerroRechazado",
  components: {
    Header,
    NavBar,
    dogCard,
    Footer
  }
}
</script>

<style scoped>
@import "../assets/css/PerroRechazado.css";
</style>