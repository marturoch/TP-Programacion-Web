
<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <br><br>
    <Formulario v-on:recomendacionEvent="recomendacionPlan($event)" v-if="show === false"></Formulario>

    <div v-if="show">
      <h1>PLANES</h1>
      <div class="planes-container">
        <Plan class="plan-container" v-for="(plan, index) in planes" v-bind:key="index" :class="{ active: index === isActive }"
              v-bind:name="plan.name"
              v-bind:tipo="plan.tipo"
              v-bind:precio="plan.price"
              v-bind:item1="plan.item1"
              v-bind:item2="plan.item2"
              v-bind:item3="plan.item3"
              v-on:modificarPlan="modificarPlan($event)">
        </Plan>
      </div>
      <h3 v-if="seleccion" id="planSeleccionado">PLAN SELECCIONADO: {{planSeleccionado}}</h3>
      <br><br>
      <p class="botonVolver" v-if="show" @click="volverAFormulario()">VOLVER A FORMULARIO</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Formulario from "../components/Formulario";
import {planes} from "../assets/js/planes";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Plan from "../components/Plan";
export default {
  name: "RecomendacionView",
  components: {
    Formulario,
    Plan,
    Header,
    NavBar,
    Footer,
  },
  data() {
    return {
      show: false,
      puntaje: 0,
      planes: planes,
      showButton: true,
      isActive: null,
      pedidos: [],
      planSeleccionado: "",
      seleccion: false
    }
  },
  methods: {
    recomendacionPlan(puntaje) {
      this.puntaje = puntaje
      this.show = true
      if (this.puntaje <= 15) {
        this.isActive = 2
      }
      else if (this.puntaje >= 20){
        this.isActive = 3
      }
      else{
        this.isActive = 3
      }
    },
    volverAFormulario(){
      this.show = false;
    },
    modificarPlan(plan){
      if (this.pedidos.length !== 0){
        let obj = this.pedidos.find(o => o.tipo === plan.tipo);
        if (obj){
          let index = this.pedidos.indexOf(obj)
          this.pedidos[index].name = plan.name
          this.pedidos[index].price = plan.price
          this.pedidos[index].subtotal = plan.price
          this.planSeleccionado = plan.name
          this.seleccion = true
        }
        else{
          this.pedidos.push(plan)
          this.planSeleccionado = plan.name
          this.seleccion = true
        }
      }
      else{
        this.pedidos.push(plan)
        this.planSeleccionado = plan.name
        this.seleccion = true
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
        this.seleccion = true
      }
    }
  }
}
</script>

<style scoped>
.active{
  background-color: rgba(217, 3, 104, 0.2);
}
.planes-container{
  display:flex;;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px
}
.plan-container{
  border: 2px solid black;
  width:300px;
  padding: 10px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px
}
#planSeleccionado{
  text-transform: uppercase;
  color: #F75C03;
  margin-top:80px;
  font-size:30px;
}
.botonVolver{
  background-color: #820263;
  color:white;
  padding:20px;
  border-radius:5px;
}

</style>
