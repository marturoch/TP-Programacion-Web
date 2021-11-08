<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <h1>PLANES</h1>
    <div class="planes-container">
      <Plan class="plan-container" v-for="(plan, index) in planes" v-bind:key="index"
            v-bind:name="plan.name"
            v-bind:tipo="plan.tipo"
            v-bind:precio="plan.price"
            v-bind:item1="plan.item1"
            v-bind:item2="plan.item2"
            v-bind:item3="plan.item3"
            v-on:addItem="addItemToCart($event)">
      </Plan>
    </div>
    <RecomendacionBoton></RecomendacionBoton>
    <br><br>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Plan from "./Plan";
import {planes} from "../assets/js/planes";
import RecomendacionBoton from "./RecomendacionBoton";
import Footer from "./Footer";

export default {
  name: "PedidoPlanes",
  components: {
    RecomendacionBoton,
    Plan,
    Header,
    NavBar,
    Footer
  },
  data(){
    return {
      planes: planes
    }
  },
  methods: {
    addItemToCart (item) {
      this.$emit("pushItem", item)
    }
  }
}
</script>

<style scoped>
.planes-container{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom:50px;
}
.plan-container{
  display:flex;
  border: 2px solid black;
  border-radius: 10px;
  flex-direction:column;
  justify-content: space-between;
  padding:0px 5px 20px 5px;
  align-items: center;
  width:22%;
  height:550px;
  background-color: white;
}

</style>