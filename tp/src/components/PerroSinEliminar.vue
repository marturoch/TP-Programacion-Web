<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <p>Tu mascota no se ha podido eliminar de la Red de Mascotas Perdidas</p>
    <p>Intente de nuevo más tarde</p>
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
  name: "PerroSinEliminar",
  components: {
    Header,
    NavBar,
    dogCard,
    Footer
  }
}
</script>

<style scoped>
</style>