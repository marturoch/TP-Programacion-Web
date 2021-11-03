<template>
  <div>
    <div class="Recomendar">
      <router-link class="botonRecomendar" to="/recomendacion">QUIERO UNA RECOMENDACION</router-link>
    </div>
    <br><br>
  </div>
</template>

<script>
export default {
  name: "RecomendacionBoton",
}

</script>

<style scoped>
.botonRecomendar {
  font-size: 15px;
  width: 20%;
  display:inline-block;
  background-color: #D90368;
  border-radius: 100px;
  text-decoration: none;
  color:white;
  padding:10px;
}
</style>