<template>
    <div class="form-container">
        <h3>¿Perdiste tu perro? Ingresá su información y agregalo a la RED</h3>
        <form method="POST" @submit="agregarPerro()">
            <label for="nombre">Responde al nombre de:</label>
            <input type="nombre" name="" id="" required v-model="name">
            <label for="raza">Raza</label>
            <input type="raza" name="" id="" required v-model="raza">
            <label for="edad">Edad</label>
            <input type="edad" name="" id="" v-model="edad">
            <label for="lugar">Lugar donde lo viste por última vez</label>
            <input type="lugar" name="" id="" v-model="lugar"><br>
            <label for="file" title="tamaño recomendado: 1200x1200">Foto</label>
            <input type="file" name="" id="" title="tamaño recomendado: 1200x1200">
            <div>
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
      lugar: ""
    }
  },
  methods:{
    agregarPerro() {
      axios.post("https://localhost:5000/api/v1/perro",
          {
            name: this.name,
            raza: this.raza,
            edad: this.edad,
            lugar: this.lugar,
          })
          .then(response => {
            console.log(response)
          })
          .catch (error => {
            console.log("Server Error in agregarPerro()" + error)
          })
    }
  }
}
</script>

<style scoped>

.form-container{
    background-color: white;
    width: 400px;
    padding: 10px 40px 40px 40px;
    margin-top: 30px;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

button{
    margin-top: 20px;
    width: 80px;
}

.agregar_a_la_red {
  width: auto;
  color: white;
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