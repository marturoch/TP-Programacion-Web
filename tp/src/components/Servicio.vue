<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    {{info($route.params.nombre)}}
    <H1>{{$route.params.nombre}}</H1>
    <br>
    <div class="container">
      <div class="fotoDescripcion">
        <img :src="image" width="300px">
        <h3>{{description}}</h3>
      </div>
      <p class="precio">${{price}}</p>
      <div>
        <p class="boton" @click="agregarServicio($route.params.nombre, description, price)">AGREGAR SERVICIO</p>
        <p class="boton" @click="eliminarServicio($route.params.nombre, description, price)">ELIMINAR SERVICIO</p>
      </div>
      <div class="agregoElimino" v-if="agregado">
        <p>SERVICIO AGREGADO</p>
      </div>
      <div class="agregoElimino" v-if="eliminado">
        <p>SERVICIO ELIMINADO</p>
      </div>
      <div>
        <p class="botonVolver" @click="irAServicios">VOLVER A SERVICIOS</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {servicios} from "@/assets/js/ProdServ";

export default {
  name: "Servicio",
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      productos: servicios,
      description: "",
      image:"",
      price:"",
      pedidos:[],
      servicioPedido: {name:"", price:"", quantity:1 , tipo:'servicio'},
      servicioEliminado: {name:"", price:"", quantity:1 , tipo:'servicio'},
      repetido: false,
      agregado: false,
      eliminado: false
    }
  },
  methods:{
    info(productoSeleccionado){
      for (let producto of this.productos){
        if(producto.name === productoSeleccionado){
          this.description = producto.description
          this.image = require('../assets/img/prodServ/' + producto.image)
          this.price = producto.price
        }
      }
    },
    irAServicios(){
      this.$router.go(-1)
    },
    agregarServicio(nombre, descripcion, precio){
      this.servicioPedido.name = nombre
      this.servicioPedido.description = descripcion
      this.servicioPedido.price = precio

      if(this.pedidos.length !== 0){
        let obj = this.pedidos.find(o => o.name === this.servicioPedido.name);
        if (obj){
          this.repetido = true
          this.agregado = true
        }
        if (!this.repetido){
          this.pedidos.push(this.servicioPedido)
          this.agregado = true
          this.eliminado = false
        }
      }
    },
    eliminarServicio(nombre, descripcion, precio){
      this.servicioEliminado.name = nombre
      this.servicioEliminado.description = descripcion
      this.servicioEliminado.price = precio

      if(this.pedidos.length !== 0){
        let obj = this.pedidos.find(o => o.name === this.servicioEliminado.name);
        if (obj){
          let index = this.pedidos.indexOf(obj)
          this.pedidos.pop(index)
          this.eliminado = true
          this.agregado = false
      }
    }
  }},
  watch:{
     pedidos: {
       handler(nuevosPedidos) {
         localStorage.pedidos = JSON.stringify(nuevosPedidos)
       },
       deep: true
     }
  },
  mounted(){
    if(localStorage.pedidos){
      this.pedidos = JSON.parse(localStorage.pedidos)
    }
  }
}
</script>

<style scoped>
h1{
  text-transform: uppercase;
}
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fotoDescripcion{
  display:flex;
  align-items: center;
  margin: 0px 100px;
}
img{
  margin-right:20px;
}
h2{
  margin-left:20px;
}
.botonVolver{
  cursor:pointer;
  border-radius:50%;
  text-align: center;
  width:90px;
  height:90px;
  background-color: #820263;
  color:white;
  padding:12px;
  margin-top:40px;
  font-size:12px;
}
.botonVolver:hover {
  opacity: 60%;
}
p{
  align-items: center;
}
.boton {
  margin: 10px;
  padding: 10px;
  border: 4px solid #820263;
  border-radius: 10px;
  color: white;
  background-color: #820263;
}
.boton:hover{
  cursor:pointer;
  opacity: 60%;
}
.agregoElimino{
  opacity:25%;
  margin-top:15px;
  border-radius:5px;
  color:white;
  padding: 0px 5px;
  background-color: #820263;
}
.precio {
  font-size: 30px;

}
</style>