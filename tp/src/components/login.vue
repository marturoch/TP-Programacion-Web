<template>
  <div>
    <Header v-bind:status="status" v-bind:info_perfil="info_perfil"></Header>
    <NavBar></NavBar>
    <br><br>
    <form class="form-container" @submit.prevent="login()">
      <div class="form-data">
        <label>MAIL <span class="required-field">*</span></label><input type="email" v-model="mail" required>
      </div>
      <div class="form-data">
        <label>CONTRASEÑA <span class="required-field">*</span></label><input type="password" v-model="password" required>
      </div>
      <div>
        <input type="submit" value="Iniciar Sesión" class="registro">
      </div>
      <br>
    </form>
    <p v-if="registrado === false" style="color: orangered"><strong>El mail o la contraseña son incorrectos</strong></p><br>
    <p>¿No tienes una cuenta? Registrate 👉<span class="aqui" @click="registrarse()"> AQUI </span>👈</p>
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
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      status: "notlogged",
      mail: "",
      password: "",
      perfil: [],
      registrado: "",
      info_perfil: ""
    }
  },
  methods: {
    registrarse() {
      this.$router.push('/registro')
    },
    login() {
      axios.get("http://localhost:5000/api/v1/registros")
          .then(response => {
            console.log(response.data)
            this.registros = response.data
            console.log(this.registros)
            for (let registro of this.registros){
              if ((registro.email === this.mail) && (registro.password === this.password)){
                this.registrado = true
                this.info_perfil = registro
                console.log(this.info_perfil)
              }
            }
            if(this.registrado){
              this.status = "logged"
              this.perfil.push({mail: this.mail, password: this.password})
              localStorage.setItem('status', this.status)
              localStorage.setItem('perfil', JSON.stringify(this.info_perfil))
              if (this.$route.query.check) {
                this.$router.push('/carrito')
              } else {
                this.$router.push({name:"Home"})
              }
            }
            else{
              this.registrado = false
              this.mail = ""
              this.password= ""
            }
          })
          .catch(error => {
            window.alert("no se ha logrado verificar que el usuario y la contraseña sean correctas")
            console.log("Server Error in login()" + error)
          })
  }},
  mounted() {
    if (localStorage.status) {
      this.$router.push("/perfil")
    }
  }
}
</script>

<style scoped>
@import "../assets/css/Formulario.css";
</style>