<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <h1>Planes</h1>
    <div class="planes-container">
      <Plan v-for="(plan, index) in planes" v-bind:key="index"
                    v-bind:name="plan.name"
                    v-bind:image="plan.image"
                    v-bind:tipo="plan.tipo"
                    v-bind:item1="plan.item1"
                    v-bind:item2="plan.item2"
                    v-bind:item3="plan.item3">
      </Plan>
    </div>
    <RecomendacionBoton></RecomendacionBoton>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Plan from "@/components/Plan";
import {planes} from "@/assets/js/planes";
import RecomendacionBoton from "./RecomendacionBoton";

export default {
  name: "Planes.vue",
  components: {
    RecomendacionBoton,
    Plan,
    Header,
    NavBar,
  },
  data(){
    return {
      planes: planes
    }
  }
}
</script>

<style scoped>
.planes-container{
  display:flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>