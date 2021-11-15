<template>
  <div class="planes" >
    <div class ="info">
      <h2 class="planes-title">·· {{name}} ··</h2>
      <h4 class="planes-tipo">
        <strong>{{tipo}}</strong>
      </h4>
      <p class="planes-precio">${{precio}}/mes</p>
      <div class="planes-info">
        <p>● {{item1}}</p>
        <p>● {{item2}}</p>
        <p>● {{item3}}</p>
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
@import "../assets/css/Plan.css";
</style>
