<template>
    <div class="form-red-container">
        <h3>¿Perdiste tu perro? Ingresá su información y agregalo a la RED</h3>
        <form @submit.prevent="agregarPerro()">
          <div class="formulario-red">
            <label> Nombre:</label>
            <input class="input-red" required v-model="name">
          </div>

          <div class="formulario-red">
            <label>Raza:</label>
            <input class="input-red" required v-model="raza">
          </div>

          <div class="formulario-red">
            <label >Edad:</label>
            <input class="input-red" v-model="edad">
          </div>

          <div class="formulario-red">
            <label> Ubicación de donde se perdio:</label>
            <input class="input-red" v-model="lugar"><br>
          </div>

          <div class="formulario-red">
            <label title="tamaño recomendado: 1200x1200">Foto</label>
            <input class="input-red" @change="addImage" title="tamaño recomendado: 1200x1200" required type="file" accept="application/jpg, .jpeg, .png">
          </div>
            <div >
              <h4>¡Recuerda que mientras más completa sea la información, más sencillo será buscarlo!</h4>
              <div class="botonRed">
                <input type="submit" class="agregar_a_la_red" value="Agregar a la RED">
              </div>
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
form{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
.form-red-container{
  background-color: rgba(0,0,0,0);
  width: 60%;
  padding: 10px 40px 40px 40px;
  margin-top: 30px;

}
.formulario-red {
  display: block;
  text-align: right;
}

.input-red {
  margin: 20px;
  height: 20px;
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