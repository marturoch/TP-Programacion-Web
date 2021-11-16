<template>
    <div class="card-container">
        <div class="img_tamaño">
          <img class="imagen_perro" :src="img">
        </div>
        <h4 class="card">Nombre: {{name}}</h4>
        <p class="card">Raza: {{raza}}</p>
        <p class="card">Edad: {{edad}}</p>
        <p class="card">Last Seen: {{lugar}}</p>
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
.card-container{
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0 ;
  width: 200px;
  align-items: center;
}
.card-container {
  display: flex;
  flex-direction: column;

}
.card{
  margin: 10px 0;
}
.imagen_perro {
  width: 200px
}
</style>