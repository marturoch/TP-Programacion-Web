<template>
  <div>
    <header></header>
    <h1>Servicios</h1>
    <div class="servicios-container">
      <ProdServMenu v-for="(servicio, index) in servicios" v-bind:key="index"
                    v-bind:name="servicio.name"
                    v-bind:image="servicio.image"
                    v-bind:description="servicio.description">
      </ProdServMenu>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import ProdServMenu from "@/components/ProdServMenu";
import {servicios} from "@/assets/js/ProdServ";

export default {
  name: "Servicios",
  components: {
    ProdServMenu
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