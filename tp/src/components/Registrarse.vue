<template>
  <div>
    <form class="form-container" method="post" @submit="registrarse()" v-if="logearse === false">

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
    <p v-if="logearse === false">Ya tienes cuenta? Inicia sesión 👉<span @click="$emit('login', true)">AQUI👈</span></p>
    <login v-if="logearse"></login>
    <div>
      <router-link :to="{name:'Home'}">Volver al Inicio</router-link>
    </div>
  </div>
</template>

<script>
import login from "./login";

export default {
  name: "Registrarse",
  components:{
    login
  },
  data() {
    return {
      logearse: false,
      nombre: "",
      apellido:"",
      email: "",
    }
},
  methods: {
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