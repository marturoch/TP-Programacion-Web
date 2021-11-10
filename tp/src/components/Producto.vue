<template>
<div>
  <Header></Header>
  <NavBar></NavBar>
  <minicarrito></minicarrito>
  {{info($route.params.nombre)}}
  <H1>{{$route.params.nombre}}</H1>
  <br>
  <div class="container">
    <div class="fotoDescripcion">
      <img :src="image" width="250px">
    </div>

    <div>
     <div class="seccion" v-if="$route.params.nombre==='snacks'">
       <ProductItem v-for="(snack, index) in snacks" v-bind:key="index"
                     v-bind:nombre="snack.name"
                     v-bind:imagen="snack.image"
                     v-bind:precio="snack.price"
                     v-bind:descripcion="snack.description"
                     v-bind:categoria="'snacks'"
                     v-on:modificarPedido="addItemToCart($event)">
       </ProductItem>
     </div>

      <div class="seccion" v-if="$route.params.nombre==='alimentos'">
        <ProductItem v-for="(alimento, index) in alimentos" v-bind:key="index"
              v-bind:nombre="alimento.name"
              v-bind:imagen="alimento.image"
              v-bind:precio="alimento.price"
              v-bind:descripcion="alimento.description"
              v-bind:categoria="'alimentos'"
              v-on:modificarPedido="addItemToCart($event)">
        </ProductItem>
      </div>

      <div class="seccion" v-if="$route.params.nombre==='juguetes'">
        <ProductItem v-for="(juguete, index) in juguetes" v-bind:key="index"
              v-bind:nombre="juguete.name"
              v-bind:imagen="juguete.image"
              v-bind:precio="juguete.price"
              v-bind:descripcion="juguete.description"
              v-bind:categoria="'juguetes'"
              v-on:modificarPedido="addItemToCart($event)">
        </ProductItem>
      </div>

      <div class="seccion" v-if="$route.params.nombre==='higiene'">
        <ProductItem v-for="(higieneprod, index) in higiene" v-bind:key="index"
              v-bind:nombre="higieneprod.name"
              v-bind:imagen="higieneprod.image"
              v-bind:precio="higieneprod.price"
              v-bind:descripcion="higieneprod.description"
              v-bind:categoria="'higiene'"
              v-on:modificarPedido="addItemToCart($event)">
        </ProductItem>
      </div>

      <div class="seccion" v-if="$route.params.nombre==='petFind'">
        <p>{{productos[3].description}}</p>
      </div>

      <p class="botonVolver" @click="irAProductos">VOLVER A PRODUCTOS</p>
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ProductItem from "./ProductItem";
import {productos} from "../assets/js/ProdServ";
import {snacks} from "../assets/js/ProdServ";
import {alimentos} from "../assets/js/ProdServ";
import {juguetes} from "../assets/js/ProdServ";
import {higiene} from "../assets/js/ProdServ";
import Minicarrito from "./minicarrito";

export default {
  name: "Producto",
  components: {
    Minicarrito,
    Header,
    NavBar,
    Footer,
    ProductItem
  },
  data() {
    return {
      productos: productos,
      snacks: snacks,
      alimentos: alimentos,
      juguetes: juguetes,
      higiene: higiene,
      description: "",
      image: "",
      pedidos: []
    }
  },
  methods: {
    info(productoSeleccionado) {
      for (let producto of this.productos) {
        if (producto.name === productoSeleccionado) {
          this.description = producto.description
          this.image = require('../assets/img/prodServ/' + producto.image)
          console.log(this.name)
        }
      }
    },
    irAProductos() {
      this.$router.go(-1)
    },
    addItemToCart(item) {
      if (this.pedidos.length !== 0){
        let obj = this.pedidos.find(o => o.name === item.name);

        if (obj){
          let index = this.pedidos.indexOf(obj)
          if (item.quantity === 0){
            this.pedidos.splice(index, 1);
          }
          else{
            this.pedidos[index].quantity = item.quantity
          }
        }
        else{
          this.pedidos.push(item)
        }
      }
      else{
        this.pedidos.push(item)
      }
    }
  },
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
  margin: 0 200px;
  display:flex;
  align-items: center;
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
.seccion{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
}
p{
  align-items: center;
}
</style>