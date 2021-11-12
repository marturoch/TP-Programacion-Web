<template>
  <div>
    <form class="form-container" @submit.prevent="recomendacion(); $emit('recomendacionEvent', puntaje)">
      <fieldset id="fieldset-container">
        <legend>INFORMACION SOBRE SU MASCOTA</legend>

        <div class="form-data">
          <label>Sexo: </label><br>
          <input name="sexo" type="radio" value="Hembra" v-model="sexo" required>Hembra<br>
          <input name="sexo" type="radio" value="Macho" v-model="sexo" required>Macho<br>
        </div>

        <div class="form-data">
        <label>Edad: </label>
          <select @change="especificarEdad()" v-model="seleccionEdad" required>
            <option value="joven">Menor a 6 años</option>
            <option value="viejo">Mayor a 6 años</option>
          </select>
        </div>

        <div class="form-data">
          <label>Raza: </label>
          <select v-model="raza" required>
            <option>Akita Inu</option>
            <option>American Pit Bull Terrier</option>
            <option>American Staffordshire Terrier</option>
            <option>Beagle</option>
            <option>Border Collie</option>
            <option>Border Terrier</option>
            <option>Boston Terrier</option>
            <option>Boyero de Berna</option>
            <option>Braco</option>
            <option>Bull Terrier</option>
            <option>Bulldog</option>
            <option>Bull Mastín</option>
            <option>Bóxer</option>
            <option>Caniche</option>
            <option>Chihuahua</option>
            <option>Chow Chow</option>
            <option>Cocker</option>
            <option>Doberman</option>
            <option>Dogo</option>
            <option>Dálmata</option>
            <option>Fox Terrier</option>
            <option>Galgo</option>
            <option>Golden Retriver</option>
            <option>Gran Danés</option>
            <option>Husky Siberiano</option>
            <option>Jack Russell Terrier</option>
            <option>Labrador Retriever</option>
            <option>Mastín</option>
            <option>Pastor Alemán</option>
            <option>Pequinés</option>
            <option>Rottweiler</option>
            <option>Sabueso</option>
            <option>San Bernardo</option>
            <option>Shar Pei</option>
            <option>Schnauzer</option>
            <option>Terranova</option>
            <option>Yorkshire terrier</option>
          </select>
        </div>

        <div class="form-data">
          <label>Enfermedad / Discapacidad:</label>
          <select @change="especificarEnfermedad()" v-model="seleccionEnfermedad" required>
            <option name="enfermedad" >Si</option>
            <option name="enfermedad" >No</option>
          </select>
        </div>

        <div class="form-data">
          <label>Vacunas:</label>
          <select @change="especificarVacuna()" v-model="seleccionVacuna" required>
            <option name="vacuna" >Si</option>
            <option name="vacuna" >No</option>
          </select>
        </div>

        <div class="form-data">
          <input class="boton-enviar" type="submit" value="ENVIAR">
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
      edad:"",
      raza:"",
      seleccionVacuna:"",
      seleccionEnfermedad:"",
      seleccionEdad:"",
      especificacionVacuna: "",
      especificacionEnfermedad:"",
      especificacionEdad:"",
      puntaje:0
    }
  },
  methods: {
    especificarVacuna() {
      if (this.seleccionVacuna == "No") {
        this.especificacionVacuna = true;
      }
      else{
        this.especificacionVacuna = true;
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
    especificarEdad() {
      if (this.seleccionEdad == "Mayor a 6") {
        this.especificacionEnfermedad = true;
      }
      else{
        this.especificacionEnfermedad = false;
      }
    },
    recomendacion(){
      if (this.seleccionEnfermedad == 'Si'){
        this.puntaje+=10
      }
      if (this.seleccionVacuna == "Si"){
        this.puntaje+= 10;
      }
      if(this.seleccionEdad == "Mayor a 6 años"){
        this.puntaje+=15
      }

      return console.log(this.puntaje)
    }}}
</script>

<style scoped>
@import "../assets/css/Formulario.css";

</style>