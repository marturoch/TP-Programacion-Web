<template>
  <div>
    <form id="form-container" @submit.prevent="recomendacion(); $emit('recomendacionEvent', puntaje)">
      <fieldset id="fieldset-container">
        <legend>INFORMACION SOBRE SU MASCOTA</legend>

        <div class="form-data">
          <label>Nombre: </label><input type="text" v-model="name" required >
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
          <select v-model="raza" required>
            <option>Raza 1</option>
            <option>Raza 2</option>
            <option>Raza 3</option>
            <option>Raza 4</option>
            <option>Raza 5</option>
            <option>Raza 6</option>
            <option>Raza 7</option>
            <option>Raza 8</option>
            <option>Otros</option>
          </select>
        </div>

        <div class="form-data">
          <label>Enfermedad / Discapacidad:</label>
          <select @change="especificarEnfermedad()" v-model="seleccionEnfermedad" required>
            <option name="enfermedad" >Si</option>
            <option name="enfermedad" >No</option>
          </select>
          <div v-if="especificacionEnfermedad">
            <label>Cual?</label><input type="text" required>
          </div>
        </div>

        <div class="form-data">
          <label>Vacunas:</label>
          <select @change="especificarVacuna()" v-model="seleccionVacuna" required>
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
  </div>
</template>

<script>


export default {
  name: "Formulario",

  data() {
    return {
      name:"",
      date:"",
      sexo:"",
      raza:"",
      seleccionVacuna:"",
      seleccionEnfermedad:"",
      especificacionVacuna: "",
      especificacionEnfermedad:"",
      puntaje:0
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
    },
    recomendacion(){
      if (this.seleccionEnfermedad == 'Si'){
        this.puntaje+=5
      }
      if(this.seleccionVacuna == "Si"){
        this.puntaje+=5
      }
      if (this.raza == "Raza 1" || this.raza == "Raza 2"){
        this.puntaje+= 1;
      }
      else if (this.raza == "Raza 3" || this.raza == "Raza 4"){
        this.puntaje+= 6;
      }
      else if (this.raza == "Raza 5" || this.raza == "Raza 6"){
        this.puntaje+= 11;
      }
      else if (this.raza == "Raza 7" || this.raza == "Raza 8"){
        this.puntaje+= 16;
      }
      return console.log(this.puntaje)
    }}}
</script>

<style scoped>
@import "../assets/css/Formulario.css";

</style>