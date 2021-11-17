<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <img src="../assets/img/netfail.png"><br>
    <p>Tu mascota no ha podido integrarse a la Red de Mascotas</p><br>
    <p>Intente de nuevo más tarde</p><br><br>
    <router-link :to="{name:'Red'}" class="reintentar">REINTENTAR</router-link><br>
    <br>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default {
  name: "PerroRechazado",
  components: {
    Header,
    NavBar,
    Footer
  }
}
</script>

<style scoped>
.reintentar {
  text-decoration: none;
  align-items: center;
  color:black;
  background-color: cornflowerblue;
  border-radius: 100px;
  padding:10px;
  height: 50px;
  width: 140px
}
img {
  width: 200px;
  height: 200px;
}
</style>