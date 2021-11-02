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
.Recomendar {
  font-size: 20px;
  width: 20%;
  background-color: #D90368;
  padding: 8px;
  border-radius: 100px;
  box-sizing: border-box;
  display: inline-block;
  }
.botonRecomendar{
  text-decoration: none;
  color:white;
}
</style>