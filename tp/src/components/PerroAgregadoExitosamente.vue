<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <p>Tu masccota ha sido agregada a la Red de Mascotas perdidas</p>
    <p>¡Espero que lo encuentres pronto, ahora todos estamos alerta!</p>
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
  name: "PerroAgregadoExitosamente",
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