<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <form class="form-container" v-if="registrarse === false">
      <div class="form-data">
        <label>MAIL: </label><input type="email" required>
      </div>
      <div class="form-data">
        <label>CONTRASEÑA: </label><input type="password" required>
      </div>
      <div class="form-data">
        <input type="submit" value="login">
      </div>
    </form>
    <p v-if="registrarse === false">No tienes cuenta? Registrate<span @click="registro()" > aqui</span></p>
    <Registrarse v-if="registrarse" v-on:login="logeo()"></Registrarse>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Registrarse from "./Registrarse";

export default {
  name: "login",
  components:{
    Header,
    NavBar,
    Footer,
    Registrarse
  },
  data() {
    return {
      registrarse: false
    }
  },
  methods:{
    registro(){
      this.registrarse = true;
      console.log(this.registrarse)
    },
    logeo(){
      this.registrarse = false;
    }
  }
}
</script>

<style scoped>
@import "../assets/css/Formulario.css";
</style>