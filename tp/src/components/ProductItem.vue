<template>
  <div>
      <div class="producto" :title="descripcion">
        <h4>{{nombre}}</h4>
        <img class="Menu-img" v-bind:src="require('../assets/img/prodServ/' + categoria + '/' + imagen)" width="100px">
       <p id="precio">${{precio}}</p>
       <div>
         <p class="agregar" v-on:click="agregarProducto(nombre, precio)">+</p>
         <p class="eliminar" v-on:click="eliminarProducto()">-</p>
         <p class="cantidad">{{ cantidad }}</p>
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
      pedido: {name:"", price:"", quantity:""},
      cantidad: 0
    }
  },
  methods:{
    agregarProducto(nombre,precio){
      this.cantidad+=1
      if (this.pedido.name === ""){
        this.pedido.name = nombre
        this.pedido.price = precio
        this.pedido.quantity = this.cantidad
      }
      else{
        if (this.pedido.name === nombre) {
            this.pedido.quantity = this.cantidad
      }
    }
      this.$emit('modificarPedido', this.pedido)
    },
    eliminarProducto() {
      if (this.cantidad !== 0){
        this.cantidad -= 1
        this.pedido.quantity = this.cantidad
        this.$emit('modificarPedido', this.pedido)
      }

    }
}}
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

}
.agregar:hover, .eliminar:hover{
  opacity: 50%;
}
.cantidad{
  border:2px solid black;
  width:40px;
  height:18px;
  padding:5px;
}
</style>