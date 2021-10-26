<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <form id="form-container">
      <fieldset id="fieldset-container">
        <legend>INFORMACION SOBRE SU MASCOTA</legend>

        <div class="form-data">
          <label>Nombre: </label><input type="text" v-model="name" required>
        </div>

        <div class="form-data">
          <label>Fecha Nacimiento: </label><input type="date" v-model="date" required><br>
        </div>

        <div class="form-data">
          <label>Sexo: </label><br>
          <input name="sexo" type="radio" value="Hembra" v-model="sexo" required>Hembra<br>
          <input name="sexo" type="radio" value="Macho" v-model="sexo" required>Macho<br>
        </div>

        <div class="form-data">
          <label>Raza: </label>
          <select v-model="raza">
            <option>Raza 1</option>
            <option>Raza 2</option>
            <option>Raza 3</option>
            <option>Raza 4</option>
            <option>Raza 5</option>
            <option>Raza 6</option>
            <option>Raza 7</option>
            <option>Otros</option>
          </select>
        </div>

        <div class="form-data">
          <label>Enfermedad / Discapacidad:</label>
          <select @change="especificarEnfermedad()" v-model="seleccionEnfermedad">
            <option name="enfermedad" >Si</option>
            <option name="enfermedad" >No</option>
          </select>
          <div v-if="especificacionEnfermedad">
            <label>Cual?</label><input type="text" required>
          </div>
        </div>

        <div class="form-data">
          <label>Vacunas:</label>
          <select @change="especificarVacuna()" v-model="seleccionVacuna">
            <option name="vacuna" >Si</option>
            <option name="vacuna" >No</option>
          </select>
          <div v-if="especificacionVacuna">
            <label>Cual? </label><input type="text" required>
          </div>
        </div>

        <div class="form-data">
          <input type="submit" value="ENVIAR">
        </div>

      </fieldset>

    </form>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default {
  name: "Formulario",
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      name:"",
      date:"",
      sexo:"",
      raza:"",
      seleccionVacuna:"",
      seleccionEnfermedad:"",
      especificacionVacuna: "",
      especificacionEnfermedad:""
    }
  },
  methods: {
    especificarVacuna() {
      if (this.seleccionVacuna == "Si") {
        this.especificacionVacuna = true;
      }
      else{
        this.especificacionVacuna = false;
      }
    },
    especificarEnfermedad() {
      if (this.seleccionEnfermedad == "Si") {
        this.especificacionEnfermedad = true;
      }
      else{
        this.especificacionEnfermedad = false;
      }
    }
  }}
</script>

<style scoped>
#form-container{
  padding:20px;
}
.form-data{
  margin:20px;
}

</style>