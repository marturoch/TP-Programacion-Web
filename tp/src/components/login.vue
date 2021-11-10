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
    <p>No tienes cuenta? Registrate 👉<span class="aqui" @click="registrarse()"> AQUI </span>👈</p>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";

export default {
  name: "login",
  components:{
    Header,
    NavBar,
    Footer
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
      console.log(result.data);
    })
  },

  data() {
    return {
      status:"notlogged",
      mail: "",
      password:"",
      perfil: [],
    }
  },
  methods:{
    registrarse(){
      this.$router.push('/registrarse')
    },
    login(){
      this.status = "logged"
      this.perfil.push({mail:this.mail, password:this.password})
      localStorage.setItem('status', this.status)
      localStorage.setItem('perfil', JSON.stringify(this.perfil))
      if (this.$route.query.check){
        this.$router.push('/carrito')
      }
      else{
        this.$router.push('/')
      }
    }
  },
  mounted(){
    if(localStorage.status){
      this.$router.push("/perfil")
    }
  }
}
</script>

<style scoped>
@import "../assets/css/Formulario.css";
</style>