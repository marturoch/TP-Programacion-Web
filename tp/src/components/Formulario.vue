<template>
  <div>
    <form class="form-container" @submit.prevent="recomendacion(); $emit('recomendacionEvent', puntaje)">
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
            <option>Affenpinscher</option>
            <option>Afgano</option>
            <option>Akita</option>
            <option>American Pit Bull Terrier</option>
            <option>American Staffordshire Terrier</option>
            <option>Beagle</option>
            <option>Bedlington Terrier</option>
            <option>Berger de Picardie</option>
            <option>Border Collie</option>
            <option>Border Terrier</option>
            <option>Boston Terrier</option>
            <option>Boyero</option>>
            <option>Braco San Germain</option>
            <option>Braco alemán de pelo corto</option>
            <option>Bull Terrier</option>
            <option>Bull Terrier Miniatura</option>
            <option>Bulldog</option>
            <option>Bulldog Francés</option>
            <option>Bull Mastín</option>
            <option>Bóxer</option>
            <option>Caniche</option>
            <option>Chihuahua</option>
            <option>Chow Chow</option>
            <option>Cirneco Del Etna</option>
            <option>Cocker</option>
            <option>Collie</option>
            <option>Doberman</option>
            <option>Dogo Argentino</option>
            <option>Dogo Mallorquín</option>
            <option>Dogo de Burdeos</option>
            <option>Dálmata</option>
            <option>Epagneul breton</option>
            <option>Eurasier</option>
            <option>Fox Terrier</option>
            <option>Foxhound Americano</option>
            <option>Foxhound Inglés</option>
            <option>Fox Terrier Toy</option>
            <option>Galgo</option>
            <option>Golden Retriever</option>
            <option>Gran Danés</option>
            <option>Grifón Belga</option>
            <option>Hamiltonstovare</option>
            <option>Husky Siberiano</option>
            <option>Jack Russell Terrier</option>
            <option>Kishu</option>
            <option>Labrador Retriever</option>
            <option>Laïka</option>
            <option>Mastín</option>
            <option>Mastín Napolitano</option>
            <option>Malamute de Alaska</option>
            <option>Münsterländer grande</option>
            <option>Münsterländer pequeño</option>
            <option>Pastor Alemán</option>
            <option>Pastor Australiano</option>
            <option>Pastor Belga</option>
            <option>Pequinés</option>
            <option>Perdiguero</option>
            <option>Rottweiler</option>
            <option>Sabueso</option>
            <option>Schnauzer</option>
            <option>Setter</option>
            <option>Shar Pei</option>
            <option>Staffordshire Bull Terrier</option>
            <option>Terranova</option>
            <option>Terrier</option>
            <option>Yorkshire terrier</option>
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