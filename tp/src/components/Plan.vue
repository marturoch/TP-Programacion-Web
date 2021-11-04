<template>
    <div class="planes">
      <div class ="info">
        <h2 class="planes-title">·· {{name}} ··</h2>
        <h4 class="planes-tipo">
          <strong>{{tipo}}</strong>
        </h4>
        <p class="planes-precio">{{precio}}</p>
        <div class="planes-info">
          <p>● {{item1}}</p>
          <p>● {{item2}}</p>
          <p>● {{item3}}</p>
        </div>
      </div>
      <p class="seleccionar">SELECCIONAR </p>
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
    "item3",
    "precio",
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
  cursor: pointer
}

.seleccionar:hover {
  opacity: 65%
}
h4{
  font-size: 20px;
  border: #D6FDD6 solid 2px;
  border-radius: 10px;
  padding: 3px;
  margin: 20px;
  background-color: #D6FDD6;
}

.planes-info {
  color: black;
  text-align: left;
  font-weight: bold;

}

.planes-precio {
  color: black;
}

.planes-tipo {
  color: black;
}

.info {
  margin-left: 10px;
}

.planes:hover {
  border-color: #D90368;
  border-width: 5px;
}
</style>