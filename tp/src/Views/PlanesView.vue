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
            v-on:modificarPlan="modificarPlan($event)">
      </Plan>
      <h3 id="planSeleccionado">PLAN SELECCIONADO: {{planSeleccionado}}</h3>
    </div>
    <RecomendacionBoton></RecomendacionBoton>
    <br><br>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Plan from "../components/Plan";
import {planes} from "../assets/js/planes";
import RecomendacionBoton from "../components/RecomendacionBoton";
import Footer from "../components/Footer";
export default {
  name: "PlanesView",
  components: {
    RecomendacionBoton,
    Plan,
    Header,
    NavBar,
    Footer
  },
  data(){
    return {
      planes: planes,
      pedidos: [],
      planSeleccionado: "",
    }
  },
  methods: {
    modificarPlan(plan){
      if (this.pedidos.length !== 0){
        this.plan = plan
        let obj = this.pedidos.find(o => o.tipo === plan.tipo);
        if (obj){
          let index = this.pedidos.indexOf(obj)
          this.pedidos[index].name = plan.name
          this.pedidos[index].price = plan.price
          this.planSeleccionado = plan.name
        }
        else{
          this.pedidos.push(plan)
          this.planSeleccionado = plan.name
        }
      }
      else{
        this.pedidos.push(plan)
        this.planSeleccionado = plan.name
      }
    }
  },
  watch:{
    pedidos: {
      handler(nuevosPedidos) {
        localStorage.pedidos = JSON.stringify(nuevosPedidos)
      },
      deep: true
    }
  },
  mounted(){
    if(localStorage.pedidos){
      this.pedidos = JSON.parse(localStorage.pedidos)
      let obj = this.pedidos.find(o => o.tipo === "plan");
      if (obj){
        let index = this.pedidos.indexOf(obj)
        this.planSeleccionado =  this.pedidos[index].name
      }
    }}}
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
#planSeleccionado{
  text-transform: uppercase;
  color: #F75C03;
  margin-top:80px;
  font-size:30px;
}
</style>
