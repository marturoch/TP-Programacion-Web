<template>
    <div class="form-container">
        <h3>¿Perdiste tu perro? Ingresá su información y agregalo a la RED</h3>
        <form @submit.prevent="agregarPerro()">
          <div class="formulario">
            <label> Nombre:</label>
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
            <label> Ubicación de donde se perdio:</label>
            <input v-model="lugar"><br>
          </div>

          <div class="formulario">
            <label title="tamaño recomendado: 1200x1200">Foto</label>
            <input id ="img" @change="addImage" title="tamaño recomendado: 1200x1200" required type="file" accept="application/jpg, .jpeg, .png">
          </div>
            <div >
              <h4>¡Recuerda que mientras más completa sea la información, más sencillo será buscarlo!</h4>
              <input type="submit" class="agregar_a_la_red" value="Agregar a la RED">
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
      lugar: "",
      img: "",
      files: ""
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
            img: this.img
          })
          .then(response => {
            console.log(response)
            this.$router.push({name: "PerroAgregadoExitosamente", params: {name: response.data["name"]}})
            this.$emit
          })
          .catch (error => {
            console.log("Server Error in agregarPerro()" + error)
            this.$router.push({name: "PerroRechazado", params: {name: error.data["name"]}})
          })
    },
    addImage: function(e) {
      const tmpFiles = e.target.files
      if (tmpFiles.length === 0) {
        return false;
      }
      const file = tmpFiles[0]
      this.files = file
      const self = this
      const reader = new FileReader()
      reader.onload = function(e) {
        self.img = e.target.result
      }
      reader.readAsDataURL(file)
      console.log(this.img)
    }
  }
}
</script>

<style scoped>
@import "../assets/css/dogForm.css";
</style>