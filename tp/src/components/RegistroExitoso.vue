<template>
  <div>
    <Header></Header>
    <div>
      <br>
      <span class="name">¡{{this.$route.params["clientName"]}}!</span>
      <br><br><br>
      <span class="agradecimiento">Gracias por suscribirte a DogCare</span>
      <div>
        <img src="../assets/img/logo.png" width="200">
      </div>
     </div>
    <br><br>
    <router-link :to="{name:'Login'}" class="volver">Iniciar Sesion</router-link>
    <router-link :to="{name:'Home'}" class="volver">Volver al Inicio</router-link>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "RegistroExitoso",
  components: {
    Footer,
    Header
  }
}
</script>

<style scoped>
@import "../assets/css/registroExsitoso.css";
</style>