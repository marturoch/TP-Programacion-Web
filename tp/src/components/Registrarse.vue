<template>
  <div>
    <form class="form-container" v-if="logearse === false">

      <div class="form-data">
        <label>NOMBRE: </label><input type="text" required>
      </div>

      <div class="form-data">
        <label>APELLIDO: </label><input type="text" required>
      </div>

      <div class="form-data">
        <label>MAIL: </label><input type="email" required>
      </div>

      <div class="form-data">
        <label>CONTRASEÑA: </label><input type="password" required>
      </div>

      <div class="form-data">
        <input type="submit" value="REGISTRARSE">
      </div>

    </form>
    <p v-if="logearse === false">Ya tienes cuenta? Haz Log in<span @click="$emit('login', true)"> aqui</span></p>
    <LogIn v-if="logearse"></LogIn>
  </div>
</template>

<script>
import LogIn from "./LogIn";

export default {
  name: "Registrarse",
  components:{
    LogIn
  },
  data() {
    return {
      logearse: false,
    }
  }
}
</script>

<style scoped>
@import "../assets/css/Formulario.css";
</style>