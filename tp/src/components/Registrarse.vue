<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <br><br><br>
    <form class="form-container" @submit.prevent="registrarse()">

      <div class="form-data">
        <label>NOMBRE <span class="required-field">*</span></label><input type="text" required v-model="name">
      </div>

      <div class="form-data">
        <label>APELLIDO<span class="required-field">*</span></label><input type="text" required v-model="surname">
      </div>

      <div class="form-data">
        <label>MAIL<span class="required-field">*</span> </label><input type="email" required v-model="email">
      </div>

      <div class="form-data">
        <label>CONTRASEÑA<span class="required-field">*</span></label><input type="password" required v-model="password">
      </div>
      <div>
        <input type="submit" value="REGISTRARSE" class="registro">
        <br><br>
      </div>

    </form>
    <br>
    <p v-if="registrado" style="color:orangered"><strong>Ya hay una cuenta existente asociada con ese email</strong></p>
    <br>
    <p>¿Ya tienes una cuenta? Inicia sesión 👉 <span class="aqui" @click="logearse()">AQUI</span>👈</p>
    <br><br><br>
    <div>
      <router-link :to="{name:'Home'}" class="volver">Volver al Inicio</router-link>
    </div>
    <br><br>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";

export default {
  name: "Registrarse",
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      registrado: false
    }
  },
  methods: {
    logearse() {
      this.$router.push('/login')
    },
    registrarse() {
      axios.post("http://localhost:5000/api/v1/registros",
          {
            name: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password
          })
          .then(response => {
            console.log(response)
            if (response.data.mensaje === "Ya hay una cuenta asociada a este email") {
              this.registrado = true
              this.email = ""
            } else {
              this.$router.push('/login')
            }
          })
          .catch(error => {
            window.alert("no se ha podido registrar su información, intente de nuevo más tarde")
            console.log("Server Error in registrarse()" + error)
          })
    }
  }
  }
</script>

<style scoped>
@import "../assets/css/Formulario.css";
</style>