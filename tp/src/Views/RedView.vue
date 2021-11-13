<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <div class="contenedor-red">
      {{perrosRed()}}
      <dog-form/>

      <div class="contenedor-cartas">
        <dogCard v-for="(perro, index) in perros" v-bind:key="index"
                     v-bind:name="perro.name"
                     v-bind:raza="perro.raza"
                     v-bind:edad="perro.edad"
                     v-bind:lugar="perro.lugar">
        </dogCard>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import dogCard from '../components/dogCard.vue'
import dogForm from '../components/dogForm.vue'
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";

export default {
  name: "RedView",
  components: {
    dogCard,
    dogForm,
    Header,
    NavBar,
    Footer
  },
  methods: {
    perrosRed() {
      axios.get("http://localhost:5000/api/v1/perros")
          .then(response => {
            console.log(response.data)
            this.perros = response.data
            console.log(this.perros)
          })}
  },
  data() {
    return {
      perros: ""
    }
  }
}
</script>

<style scoped>

.contenedor-red{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contenedor-cartas{
  padding: 40px 0px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>