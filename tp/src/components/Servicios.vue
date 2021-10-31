<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <h1>Servicios</h1>
    <div class="servicios-container">
      <ProdServMenu v-for="(servicio, index) in servicios" v-bind:key="index"
                    v-bind:name="servicio.name"
                    v-bind:image="servicio.image"
                    v-bind:description="servicio.description">
      </ProdServMenu>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar"
import ProdServMenu from "@/components/ProdServMenu";
import {servicios} from "@/assets/js/ProdServ";
import Footer from "./Footer";

export default {
  name: "Servicios",
  components: {
    NavBar,
    Header,
    ProdServMenu,
    Footer
  },
  data(){
    return{
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