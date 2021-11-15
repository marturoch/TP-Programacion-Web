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
        <div class="info_mostrar">
          <h3>{{description}}</h3>
          <p class="precio">${{price}}</p>
        </div>
      </div>
      <div>
        <p v-if="eliminar" class="boton" @click="agregarServicio($route.params.nombre, description, price)">AGREGAR SERVICIO AL CARRITO</p>
        <p v-if="!eliminar" class="boton" @click="eliminarServicio($route.params.nombre)">ELIMINAR SERVICIO DEL CARRITO</p>
      </div>
      <div class="agregoElimino" v-if="agregado">
        <p>SERVICIO AGREGADO AL CARRITO</p>
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
      servicioPedido: {name:"", price:"", quantity:1 , tipo:'servicio', subtotal:""},
      repetido: false,
      agregado: false,
      eliminar: true
    }
  },
  methods:{
    info(productoSeleccionado){
      for (let producto of this.productos){
        if(producto.name === productoSeleccionado){
          this.description = producto.description
          this.image = require('../assets/img/prodServ/' + producto.image)
          this.price = producto.price
          this.subtotal = producto.price
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
      this.servicioPedido.subtotal = precio

      if(this.pedidos.length !== 0){
        let obj = this.pedidos.find(o => o.name === this.servicioPedido.name);
        if (obj){
          this.repetido = true
          this.agregado = true
          this.eliminar = false
        }
        if (!this.repetido){
          this.pedidos.push(this.servicioPedido)
          this.agregado = true
          this.eliminar = false
          localStorage.pedidos = JSON.stringify(this.pedidos)
        }
      }
      else{
        this.pedidos.push(this.servicioPedido)
        this.agregado = true
        this.eliminar = false
        localStorage.pedidos = JSON.stringify(this.pedidos)
      }
    },
    eliminarServicio(nombre){

      if(this.pedidos.length !== 0){
        let obj = this.pedidos.find(o => o.name === nombre);
        if (obj){
          let index = this.pedidos.indexOf(obj)
          this.pedidos.pop(index)
          this.agregado = false
          this.eliminar = true
          localStorage.pedidos = JSON.stringify(this.pedidos)
        }
      }
    }},
  mounted(){
    if(localStorage.pedidos){
      this.pedidos = JSON.parse(localStorage.pedidos)
      let obj = this.pedidos.find(o => o.name === this.$route.params.nombre);
      if (obj){
        this.agregado = true
        this.eliminar = true
      }
    }
  }
}
</script>

<style scoped>
@import "../assets/css/servicio.css";
</style>
