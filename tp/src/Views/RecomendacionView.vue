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
                v-bind:item1="plan.item1"
                v-bind:item2="plan.item2"
                v-bind:item3="plan.item3">
          </Plan>
        </div>
        <RecomendacionBoton></RecomendacionBoton>
        <br><br>
    <!--    <div class="todosPlanes">

          <div class="seleccionado" v-if="show">
            <h2>PLAN RECOMENDADO</h2>
            <planTemplate class="principal" :data=planes[array]></planTemplate>
          </div>

          <div v-if="show">
            <button @click="otroPlan()" v-if="showButton">Seleccionar otro plan</button>
          </div>

          <div class="noSeleccionado" v-if="show">
            <planTemplate class="secundario" v-if="otrosPlanes" :data=planes[otros[0]]></planTemplate>
            <planTemplate class="secundario" v-if="otrosPlanes" :data=planes[otros[1]]></planTemplate>
            <planTemplate class="secundario" v-if="otrosPlanes" :data=planes[otros[2]]></planTemplate>
          </div>

        </div>-->
      <p class="botonVolver" v-if="show" @click="volverAFormulario()">VOLVER A FORMULARIO</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Formulario from "../components/Formulario";
//import planTemplate from "../components/planTemplate.vue"
import {planes} from "../assets/js/planes";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Plan from "../components/Plan";

export default {
  name: "RecomendacionView",
  components: {
    Formulario,
    //planTemplate,
    Plan,
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      show: false,
      puntaje: 0,
      planes: planes,
      showButton: true,
      isActive: null
    }
  },
  methods: {
    recomendacionPlan(puntaje) {
      this.puntaje = puntaje
      this.show = true

      if (this.puntaje <= 5) {
        this.isActive = 0
      }
      else if (this.puntaje > 5 && this.puntaje <=10){
        this.isActive = 1
      }
      else if (this.puntaje > 10 && this.puntaje <= 15){
        this.isActive = 2
      }
      else{
        this.isActive = 3
      }
    },
    volverAFormulario(){
      this.show = false;
    }
  }
}

</script>

    <style scoped>

      .active{
        background-color: rgba(217, 3, 104, 0.2);
      }

      .planes-container{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
        margin-bottom:50px;
      }
      .plan-container{
        display:flex;
        border:2px solid black;
        flex-direction:column;
        justify-content: space-between;
        padding:0px 5px 20px 5px;
        align-items: center;
        width:22%;
        height:550px;
      }
    </style>