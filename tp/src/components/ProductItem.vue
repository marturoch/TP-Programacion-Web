<template>
  <div>
    <div class="producto" :title="descripcion">
      <h4>{{nombre}}</h4>
      <img class="Menu-img" v-bind:src="require('../assets/img/prodServ/' + categoria + '/' + imagen)" width="100px">
      <p id="precio">${{precio}}</p>
      <div class="quantity">
        <p class="eliminar" v-on:click="eliminarProducto(nombre, precio)" title="eliminar">-</p>
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
    eliminarProducto(nombre, precio) {
      this.cantidad -= 1
      if (this.cantidad !== 0){
        this.pedido.name = nombre
        this.pedido.quantity = this.cantidad
        this.pedido.price = precio
        this.pedido.subtotal = parseInt(precio) * parseInt(this.pedido.quantity)
        this.eliminado = true
        this.agregado = false
      }
      else{
        this.pedido.name = nombre
        this.pedido.quantity = this.cantidad
        this.pedido.price = precio
        this.pedido.subtotal = parseInt(precio) * parseInt(this.pedido.quantity)
        this.eliminado = false
      }
      this.$emit('modificarPedido', this.pedido)
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
.producto{
  border:4px solid #820263;
  background-color: white;
  border-radius: 40px;
  padding:20px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  flex-basis:30%;
  width: 200px;
  height: 400px;
}
.producto:hover{
  cursor:pointer
}

#precio {
  font-size: 24px;
  font-family: Futura, cursive;
  color: black;
}

p{
  font-size:15px;
  text-align: justify;
}

.agregar, .eliminar{
  text-decoration: none;
  color:white;
  background-color: #820263;
  border-radius: 20px;
  padding:10px;
  cursor: pointer;
  margin-right:10px;
  width:20px;
  align-items: center;
  text-align:center;

}
.agregar:hover, .eliminar:hover{
  opacity: 50%;
}
.cantidad{
  border:2px solid black;
  width:40px;
  height:18px;
  padding:5px;
  margin-right: 10px;
  text-align:center;
}
.agregoElimino{
  opacity:25%;
  color:white;
  padding: 0px 5px;
  background-color: #820263;
}
.quantity{
  display:flex;
  align-items:center;
}
</style>
