<template>
  <div>
    <Header v-bind:status="status"></Header>
    <NavBar></NavBar>
    <form class="form-container" @submit.prevent="login()">
      <div class="form-data">
        <label>MAIL <span class="required-field">*</span></label><input type="email" v-model="mail" required>
      </div>
      <div class="form-data">
        <label>CONTRASEÑA <span class="required-field">*</span></label><input type="password" v-model="password" required>
      </div>
      <div>
        <input type="submit" value="Login" class="registro">
      </div>
    </form>
    <p>No tienes cuenta? Registrate 👉<span @click="registrarse()">AQUI👈</span></p>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default {
  name: "login",
  components:{
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      status:"notlogged",
      mail: "",
      password:"",
      perfiles: []
    }
  },
  methods:{
    registrarse(){
      this.$router.push('/registrarse')
    },
    login(){
      this.status = "logged"
      this.perfiles.push({mail:this.mail, password:this.password})
      localStorage.setItem('status', this.status)
      localStorage.setItem('perfil', JSON.stringify(this.perfiles))
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
@import "../assets/css/Formulario.css";
</style>