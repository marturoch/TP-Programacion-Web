<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <div class="contenedor-red">
      <dog-form/>

      <div class="contenedor-cartas">
        <dog-card/>
        <dog-card/>
        <dog-card/>
        <dog-card/>
        <dog-card/>
        <dog-card/>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import dogCard from '../components/dogCard.vue'
import dogForm from '../components/dogForm.vue'
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default {
  name: "RedView",
  components: {
    dogCard,
    dogForm,
    Header,
    NavBar,
    Footer
  }
}
</script>

<style scoped>

.contenedor-red{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contenedor-cartas{
  padding: 40px 0px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>