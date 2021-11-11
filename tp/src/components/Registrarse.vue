<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <form class="form-container" method="post" @submit="registrarse()">

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
        <label>CONTRASEÑA<span class="required-field">*</span></label><input type="password" v-model="password" required>
      </div>
      <div>
        <input type="submit" value="REGISTRARSE" class="registro" @click="registrarse()">
      </div>

    </form>
    <p>¿Ya tienes cuenta? Inicia sesión 👉 <span class="aqui" @click="logearse()">AQUI</span>👈</p>
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
import axios from "axios";

export default {
  name: "Registrarse",
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
      name:"",
      surname:"",
      email: "",
      password:"",
    }
  },
  methods: {
    logearse(){
      this.$router.push('/login')
    },
    registrarse () {
      //this.$router.push({name:"RutaRegistroExitoso", params:{clientName: this.nombre}})
      axios.post("http://localhost:5000/api/v1/registros",
          {
            user: this.name,
            surname: this.surname,
            email: this.email,
            password: this.password,
          })
      .then(response => {
        console.log(response)
        this.$router.push({name:"RutaRegistroExitoso", params:{clientName: response.data["name"]}})
      })
      .catch (error => {
        console.log(error)
        this.$router.push({name:"NotFoundView"})
      })
    }
  }
}
</script>

<style scoped>
@import "../assets/css/Formulario.css";
</style>