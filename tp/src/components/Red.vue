<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <div class="contenedor-red">
      <dogForm/>

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
import dogCard from './dogCard.vue'
import dogForm from './dogForm.vue'
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default {
  name: "Red.vue",
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
    padding: 40px 0;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 14px;
    grid-row-gap: 10px;
  }

</style>