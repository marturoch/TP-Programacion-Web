<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <p>Tu masccota ha sido eliminada de la Red de Mascotas perdidas</p>
    <p>¡Espero que lo hayas encontrado!</p>
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
  name: "PerroEliminadoExitosamente",
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