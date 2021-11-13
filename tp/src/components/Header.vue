<template>
  <div>
    <div id="header_1">
      <div class="cuentaYcarrito">
        <router-link v-if="status!=='logged'" class="login" to="/login">INGRESAR/REGISTRARSE</router-link>
        <p v-if="status==='logged'" class="miCuenta" @click="ir_cuenta()">Mi Cuenta</p>
        <router-link class="carrito" to="/carrito">CARRITO</router-link>
        <p class="info">{{info_perfil}}</p>
<!--        <router-link v-if="status==='logged'" class="carrito" to="/minicarrito">MINICARRITO</router-link>&ndash;&gt;-->
      </div>
    </div>
    <div id="header_2">
      <router-link to="/">
        <img src="../assets/img/logo.png" alt="logo" width="200px">
      </router-link>
      <div id = "name">
        <h1>DOG CARE ·</h1>
      </div>
      <div id="subtitle">
        <h2>Seguros para Perros</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header.vue",
  data() {
    return {
      status: localStorage.getItem('status')
    }
  },
  props: [
      "info_perfil"
  ],
  methods: {
    ir_cuenta() {
      this.$router.push({name:"Perfil", params:{info_perfil:this.info_perfil}})
    }
  }
}
</script>

<style scoped>
@import "../assets/css/header.css";

</style>