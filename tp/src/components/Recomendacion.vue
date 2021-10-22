<template>
  <div class="Recomendar">
      <h4 v-on:click="$emit('recomendacionEvent', 'planes')">Quiero una recomendación</h4>
  </div>
</template>

<script>
export default {
  name: "Recomendacion",
  data(){
  }
}

</script>

<style scoped>
.Recomendar {
  font-size: 15px;
  width: 20%;
  background-color: #42b983;
  padding: 8px;
  border-radius: 100px;
  box-sizing: border-box;
  font-family: Helvetica;
  color: white;
  justify-content: center;
  }

</style>