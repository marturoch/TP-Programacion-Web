<template>
    <div class="planes">
      <div>

        <h2 class="planes-title">·· {{name}} ··</h2>
        <h4 class="planes-info">  <strong>{{tipo}}</strong></h4>
        <p class="planes-info">{{item1}}</p>
        <p class="planes-info">{{item2}}</p>
        <p class="planes-info">{{item3}}</p>
      </div>
      <router-link class="seleccionar" v-bind:to="/planes/ + name" >SELECCIONAR </router-link>
    </div>
</template>

<script>
export default {
  name: "Plan",
  props: [
    "name",
    "tipo",
    "item1",
    "item2",
    "item3"
  ],
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
button {
  background-color: #D90368;
  color: white;
  border-radius: 100px;
  border: 3px solid #D90368;
  padding:10px;
  cursor: pointer;
  margin-bottom:20px;
}
.planes-title{
  text-transform: uppercase;
  color: #A82885;
  font-family: 'Permanent Marker', cursive;
  font-size: 30px;
}
.seleccionar{
  text-decoration: none;
  color:white;
  background-color: #820263;
  border-radius: 20px;
  padding:10px;
}
h4{
  font-size: 20px;
  border: #D6FDD6 solid 2px;
  border-radius: 10px;
  padding: 3px;
  margin: 20px;
  background-color: #D6FDD6;
}

</style>