<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <h1>SERVICIOS</h1>
    <div class="servicios-container">
      <ProdServMenu v-for="(servicio, index) in servicios" v-bind:key="index"
                    v-bind:name="servicio.name"
                    v-bind:image="servicio.image"
                    v-bind:description="servicio.description"
                    v-bind:tipo="tipo">
      </ProdServMenu>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import NavBar from "../components/NavBar"
import ProdServMenu from "../components/ProdServMenu";
import {servicios} from "../assets/js/ProdServ";
import Footer from "../components/Footer";

export default {
  name: "ServicesView",
  components: {
    NavBar,
    Header,
    ProdServMenu,
    Footer
  },
  data(){
    return{
      tipo: "servicios",
      servicios: servicios
    }
  }
}
</script>

<style scoped>
.servicios-container{
  display:flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>