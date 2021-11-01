<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <p>Mis Datos</p>
    <p>Pedidos</p>
    <p>Mis mascotas</p>
    <p>Salir</p>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default {
  name: "Perfil",
  components:{
    Header,
    NavBar,
    Footer
  }
}
</script>

<style scoped>

</style>