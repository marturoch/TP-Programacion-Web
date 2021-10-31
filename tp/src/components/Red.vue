<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <h1>Red de Mascotas</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: "Red.vue",
  components: {
    Header,
    NavBar,
    Footer
  }
}
</script>

<style scoped>

</style>