<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <h1>CARRITO</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default {
  name: "Carrito",
  components:{
    Header,
    NavBar,
    Footer
  }
}
</script>

<style scoped>

</style>