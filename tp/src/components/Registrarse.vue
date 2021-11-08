<template>
  <div>
    <form class="form-container" v-if="logearse === false">

      <div class="form-data">
        <label>NOMBRE: </label><input type="text" required v-model="nombre">
      </div>

      <div class="form-data">
        <label>APELLIDO: </label><input type="text" required v-model="apellido">
      </div>

      <div class="form-data">
        <label>MAIL: </label><input type="email" required v-model="mail">
      </div>

      <div class="form-data">
        <label>CONTRASEÑA: </label><input type="password" required>
      </div>
      <div>
        <input type="button" value="REGISTRARSE" class="registro">
      </div>

    </form>
    <p v-if="logearse === false">Ya tienes cuenta? Inicia sesión 👉<span @click="$emit('login', true)">AQUI👈</span></p>
    <login v-if="logearse"></login>
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
}
}
</script>

<style scoped>
@import "../assets/css/Formulario.css";
</style>