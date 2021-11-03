<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <br><br>
    <Formulario v-on:recomendacionEvent="recomendacionPlan($event)" v-if="show === false"></Formulario>
    <div class="todosPlanes">

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

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Formulario from "../components/Formulario";
import planTemplate from "../components/planTemplate.vue"
import {planes} from "../assets/js/planes";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default {
  name: "RecomendacionView",
  components: {
    Formulario,
    planTemplate,
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      show: false,
      puntaje: 0,
      planes: planes,
      array: null,
      otros: [],
      otrosPlanes: false,
      showButton: true,
    }
  },
  methods: {
    recomendacionPlan(puntaje) {
      this.puntaje = puntaje
      this.show = true

      if (this.puntaje <= 5) {
        this.array = 0
        this.otros = [1,2,3]
      }
      else if (this.puntaje > 5 && this.puntaje <=10){
        this.array = 1
        this.otros = [0,2,3]
      }
      else if (this.puntaje > 10 && this.puntaje <= 15){
        this.array = 2
        this.otros = [0,1,3]
      }
      else{
        this.array = 3
        this.otros = [0,1,2]
      }
    },
    otroPlan() {
      this.otrosPlanes = true;
      this.showButton = false;
    }
  }
}

</script>

<style scoped>
#form-container{
  padding:20px;
}
.form-data{
  margin:20px;
}
.todosPlanes{
  display:flex;
  flex-direction:column;
}
.noSeleccionado{
  display:flex;
  justify-content: center;
  align-items: baseline;
}
.principal{
  font-size: 25px;
  border: 4px dotted black;
}
.secundario{
  flex-basis:20%;
}

button {
  background-color: #D90368;
  color: white;
  border-radius: 100px;
  font-size: 20px;
  border: 3px solid #D90368;
  padding:10px;
  cursor: pointer;
  margin-bottom:20px;
}
</style>