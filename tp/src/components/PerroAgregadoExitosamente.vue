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
    <div class="contenedor-red">
      <div class="contenedor-cartas">
        <dog-card/>
        <dog-card/>
        <dog-card/>
        <dog-card/>
        <dog-card/>
        <dog-card/>
      </div>
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

.contenedor-cartas{
  padding: 40px 0px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.contenedor-red {
  display: flex;
  flex-direction: column;
  align-items: center;
}
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
</style>