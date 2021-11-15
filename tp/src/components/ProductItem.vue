<template>
  <div>
    <div class="producto" :title="descripcion">
      <h4>{{nombre}}</h4>
      <img class="Menu-img" v-bind:src="require('../assets/img/prodServ/' + categoria + '/' + imagen)" width="100px">
      <p id="precio">${{precio}}</p>
      <div class="quantity">
        <p class="eliminar" v-on:click="eliminarProducto()" title="eliminar">-</p>
        <p class="cantidad">{{ cantidad }}</p>
        <p class="agregar" v-on:click="agregarProducto(nombre, precio)" title="agregar">+</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props:[
    "categoria",
    "nombre",
    "imagen",
    "precio",
    "descripcion"
  ],
  data(){
    return{
      pedido: {name:"", price:"", quantity:"", tipo:this.categoria, subtotal:""},
      cantidad: 0,
      agregado: false,
      eliminado: false
    }
  },
  methods:{
    agregarProducto(nombre,precio){
      this.cantidad+=1
      if (this.pedido.name === ""){
        this.pedido.name = nombre
        this.pedido.price = precio
        this.pedido.quantity = this.cantidad
        this.pedido.subtotal = parseInt(this.pedido.price) * parseInt(this.pedido.quantity)
      }
      else{
        if (this.pedido.name === nombre) {
          this.pedido.quantity = this.cantidad
          this.pedido.subtotal = parseInt(this.pedido.price) * parseInt(this.pedido.quantity)
        }
      }
      this.$emit('modificarPedido', this.pedido)
      this.agregado = true
      this.eliminado = false
    },
    eliminarProducto() {
      if (this.cantidad !== 0){
        this.cantidad -= 1
        this.pedido.quantity = this.cantidad
        this.$emit('modificarPedido', this.pedido)
        this.eliminado = true
        this.agregado = false
      }
      else{
        this.eliminado = false
      }
    }
  },
  mounted(){
    if(localStorage.pedidos){
      this.pedidos = JSON.parse(localStorage.pedidos)
      let obj = this.pedidos.find(o => o.name === this.nombre);
      if (obj){
        let index = this.pedidos.indexOf(obj)
        this.cantidad =  this.pedidos[index].quantity
      }
    }
  },
  watch:{
    cantidad(){
      this.$emit("modificar", true)
    }
  }
}
</script>

<style scoped>
@import "../assets/css/ProductItem.css";
</style>
