<template>
    <div class="form-container">
        <h3>¿Perdiste tu perro? Ingresá su información y agregalo a la RED</h3>
        <form method="POST" @submit="agregarPerro()">
          <div class="formulario">
            <label>Responde al nombre de:</label>
            <input required v-model="name">
          </div>

          <div class="formulario">
            <label>Raza:</label>
            <input required v-model="raza">
          </div>

          <div class="formulario">
            <label >Edad:</label>
            <input v-model="edad">
          </div>

          <div class="formulario">
            <label>Lugar donde lo viste por última vez:</label>
            <input v-model="lugar"><br>
          </div>

          <div class="formulario">
            <label title="tamaño recomendado: 1200x1200">Foto</label>
            <input title="tamaño recomendado: 1200x1200" required type="file" accept="application/jpg, .jpeg, .png">
          </div>
            <div >
              <h4>¡Recuerda que mientras más completa sea la información, más sencillo será buscarlo!</h4>
              <input type="submit" class="agregar_a_la_red" value="Agregar a la RED" @submit="agregarPerro()">
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "dogForm",
  data(){
    return{
      name: "",
      raza: "",
      edad: "",
      lugar: ""
    }
  },
  methods:{
    agregarPerro() {
      axios.post("http://localhost:5000/api/v1/perros",
          {
            name: this.name,
            raza: this.raza,
            edad: this.edad,
            lugar: this.lugar,
          })
          .then(response => {
            console.log(response)
            this.$router.push({name: "PerroAgregadoExitosamente", params: {name: response.data["name"]}})
          })
          .catch (error => {
            console.log("Server Error in agregarPerro()" + error)
            this.$router.push({name: "PerroRechazado", params: {name: error.data["name"]}})
          })
    },
    eliminarPerro() {
      axios.delete("http://localhost:5000/api/v1/perros",
          {
            name: this.name,
            raza: this.raza,
            edad: this.edad,
            lugar: this.lugar,
          })
          .then(response => {
            console.log(response)
            this.$router.push({name: "PerroEliminadoExitosamente", params: {name: response.data["name"]}})
          })
          .catch (error => {
            console.log("Server Error in agregarPerro()" + error)
            this.$router.push({name: "PerroSinEliminar", params: {name: error.data["name"]}})
          })
    }
  }
}
</script>

<style scoped>

.form-container{
    background-color: rgba(0,0,0,0);
    width: 60%;
    padding: 10px 40px 40px 40px;
    margin-top: 30px;

}
button{
    margin-top: 20px;
    width: 80px;
}

.formulario {
  display: block;
  text-align: right;
}

input {
  margin-right: 300px;
}

.agregar_a_la_red {
  width: auto;
  color: white;
  margin-left: 340px;
  background-color: #820263;
  border: solid 1px;
  border-color: #820263;
  border-radius: 100px;
  padding: 20px;
}
.agregar_a_la_red:hover {
  cursor: pointer;
}
</style>