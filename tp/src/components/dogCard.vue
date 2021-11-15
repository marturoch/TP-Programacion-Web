<template>
    <div class="card-container">
        <div class="img_tamaño">
          <img class="imagen_perro" :src="img">
        </div>
        <h4 class="card-name">Nombre: {{name}}</h4>x
        <p class="card-raza">Raza: {{raza}}</p>
        <p class="card-edad">Edad: {{edad}}</p>
        <p class="card-lugar">Last Seen: {{lugar}}</p>
    </div>
</template>

<script>

export default {
  name: "dogCard",
  data() {
    return {
      perros: ""
    }
  },
  props: [
      "name",
      "raza",
      "edad",
      "lugar",
      "img"
  ]
}

</script>

<style scoped>
@import "../assets/css/DogCard.css";
</style>