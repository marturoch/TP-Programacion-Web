<template>
  <div class="planes" >
    <div class ="info">
      <h2 class="planes-title">·· {{name}} ··</h2>
      <h4 class="planes-tipo">
        <strong>{{tipo}}</strong>
      </h4>
      <p class="planes-precio">${{precio}}/mes</p>
      <div class="planes-info">
        <p> {{item1}}</p>
        <p> {{item2}}</p>
        <p> {{item3}}</p>
      </div>
    </div>
    <p class="seleccionar" v-on:click="agregarPlan(name, precio)">SELECCIONAR</p>
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
  data(){
    return{
      plan: {name:"", price:"", quantity:1 ,  tipo:'plan', subtotal:""}
    }
  },
  methods: {
    agregarPlan(name,precio) {
      this.plan.name = name
      this.plan.price = precio
      this.plan.subtotal = precio
      this.$emit('modificarPlan', this.plan)
    }
  }
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
  cursor: pointer;
  display:flex;
  justify-content: center
}

.seleccionar:hover {
  opacity: 65%
}
.planes-tipo{
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
.planes:hover {
  border-color: #D90368;
  border-width: 5px;
}
</style>
