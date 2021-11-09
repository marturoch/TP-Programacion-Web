<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <form class="form-container" method="post" @submit="registrarse()">

      <div class="form-data">
        <label>NOMBRE <span class="required-field">*</span></label><input type="text" required v-model="nombre">
      </div>

      <div class="form-data">
        <label>APELLIDO <span class="required-field">*</span></label><input type="text" required v-model="apellido">
      </div>

      <div class="form-data">
        <label>MAIL<span class="required-field">*</span> </label><input type="email" required v-model="email">
      </div>

      <div class="form-data">
        <label>CONTRASEÑA<span class="required-field">*</span></label><input type="password" required>
      </div>
      <div>
        <input type="submit" value="REGISTRARSE" class="registro">
      </div>

    </form>
    <p>Ya tienes cuenta? Inicia sesión<span @click="logearse()">AQUI👈</span></p>
    <div>
      <router-link :to="{name:'Home'}">Volver al Inicio</router-link>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default {
  name: "Registrarse",
  components:{
    Header,
    NavBar,
    Footer
  },
  methods: {
    logearse(){
      this.$router.push('/login')
    },
    registrarse () {
      this.$router.push({name:"RutaRegistroExitoso", params:{clientName: this.nombre}})
      //axios.post("https://localhost:8080/registrarse")
      //.then(rsp => {
      //  this.$router.push({name:"RutaRegistroExitoso", params:{clientName: this.nombre}})
      //})
      //.catch (err => {
      //  console.log("Server Error in regisrarse()" + err)
      //  this.$router.push({name:"NotFoundView", params:{clientName: this.nombre}})
      //})
    }
  }
}
</script>

<style scoped>
@import "../assets/css/Formulario.css";
</style>