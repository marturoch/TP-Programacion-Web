<template>
  <div>
    <Header></Header>
    <div>
      <br>
      <span class="name">malas noticias :(</span>
      <br><br><br>
      <span class="agradecimiento">No hemos podido registrar tu solicitud, prueba de nuevo en otro momento</span>
      <div>
        <img src="../assets/img/logo.png" width="200">
      </div>
    </div>
    <br><br>
    <router-link :to="{name:'Home'}" class="volver">Volver al Inicio</router-link>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "RegistroRechazado",
  components: {
    Footer,
    Header
  }
}
</script>

<style scoped>
.volver {
  text-decoration: none;
  color:white;
  background-color: #820263;
  border-radius: 20px;
  padding:10px;
  cursor: pointer;
  height: 50px;
  width: 140px
}
</style>