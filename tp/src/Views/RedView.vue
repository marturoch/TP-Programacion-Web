<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <br>
    <div>
      <div class="botones-red">
        <p class="agregar-red" @click="mostrar=true">AGREGÁ TU MASCOTA A LA RED</p>
        <br>
        <p @click="perrosRed()" class="red_completa">VER RED COMPLETA</p>
      </div>
      <div v-if="mostrar===false">
        <br>
        <label>Buscá a tu perro</label>
        <input class="buscador-red" type="search" @keyup.enter="buscarPerro()" v-model="nombreperro">
        <br>
        <p class = "mensaje">{{mensaje}}</p>
        <br>
        <p v-if="noRed">Por ahora no hay mascotas en la red</p>
      </div>
    </div>

    <div class="contenedor-red">
      <dog-form v-if="mostrar"/>
      <div class="contenedor-cartas">
        <dogCard v-for="(perro, index) in perros" v-bind:key="index"
                     v-bind:name="perro.name"
                     v-bind:raza="perro.raza"
                     v-bind:edad="perro.edad"
                     v-bind:lugar="perro.lugar"
                     v-bind:img="perro.img" >
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
            this.mostrar = false
            if (this.perros.length === 0){
              this.noRed = true
            }
          })
          .catch(error => {
            window.alert("no se ha logrado cargar la red de mascotas perdidas")
            console.log("Server Error in perrosRed()" + error)
          })},
    buscarPerro() {
      let nombre_perro = this.nombreperro
      axios.get('http://localhost:5000/api/v1/perro?name=' + nombre_perro)
          .then(response => {
            console.log(response.data)
            this.perros = response.data
            console.log(this.perros)
            if (this.perros.length === 0) {
              this.mensaje = "No hay ningúna mascota perdida con ese nombre"
            }
            else {
              this.mensaje = ""
            }
          })
          .catch(error => {
            console.log("Server Error in buscarPerro()" + error)
            window.alert("hubo un error al tratar de buscar una mascota perdida con ese nombre")
          })
    }
  },
  data() {
    return {
      perros: "",
      nombreperro: "",
      mostrar: "",
      noRed: false,
      mensaje: ""
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
  display: flex;

}
.agregar-red {
  padding: 15px;
  margin: 10px;
  text-decoration: none;
  color: white;
  background-color: #D90368;
  border-radius: 90px;
  font-weight: bold;
  justify-content: flex-end;
}

.agregar-red:hover {
  cursor: pointer
}
.red_completa {
  padding: 15px;
  margin: 10px;
  text-decoration: none;
  color: white;
  background-color: #D90368;
  border-radius: 90px;
  font-weight: bold;
  justify-content: flex-end;
}

.red_completa:hover {
  cursor: pointer
}
.botones-red {
  display: flex;
  justify-content: center;
  align-items: center;
}
.buscador-red {
  height:30px;
  width: 190px;
}
.mensaje {
  color: red;
  font-size: 15px;
}
</style>