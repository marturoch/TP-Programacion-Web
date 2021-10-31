<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <Formulario v-on:recomendacionEvent="recomendacionPlan($event)" v-if="show === false"></Formulario>
    <planFrida v-if="hasta5"></planFrida>
    <planRocky v-if="entre6y10"></planRocky>
    <planKira v-if="entre11y15"></planKira>
    <planZeus v-if="mayora15"></planZeus>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Formulario from "./Formulario";
import planFrida from "./planFrida"
import planRocky from "./planRocky";
import planKira from "./planKira";
import planZeus from "./planZeus";

export default {
  name: "Recomendacion",
  components: {
    Header,
    NavBar,
    Footer,
    Formulario,
    planFrida,
    planKira,
    planRocky,
    planZeus
  },
  data() {
    return {
      show: false,
      puntaje: 0,
      hasta5: false,
      entre6y10: false,
      entre11y15: false,
      mayora15: false
    }
  },
  methods: {
    recomendacionPlan(puntaje) {
      this.puntaje = puntaje
      this.show = true
      if (this.puntaje <= 5) {
        this.hasta5 = true
      } else if (this.puntaje > 5 && this.puntaje <= 10) {
        this.entre6y10 = true;
      } else if (this.puntaje > 10 && this.puntaje <= 15) {
        this.entre11y15 = true;
      } else {
        this.mayora15 = true;
      }
    }}
}
</script>

<style scoped>
#form-container{
  padding:20px;
}
.form-data{
  margin:20px;
}

</style>