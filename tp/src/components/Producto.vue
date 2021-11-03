<template>
<div>
  <Header></Header>
  <NavBar></NavBar>
  {{info($route.params.nombre)}}
  <H1>{{$route.params.nombre}}</H1>
  <br>
  <div class="container">
    <div class="fotoDescripcion">
      <img :src="image" width="250px">
    </div>
    <div>

     <div class="seccion" v-if="name==='snacks'">
       <Menu v-for="(snack, index) in snacks" v-bind:key="index"
                     v-bind:nombre="snack.name"
                     v-bind:imagen="snack.image"
                     v-bind:precio="snack.price"
                     v-bind:categoria="'snacks'">
       </Menu>
     </div>

      <div class="seccion" v-if="name==='alimentos'">
        <Menu v-for="(alimento, index) in alimentos" v-bind:key="index"
              v-bind:nombre="alimento.name"
              v-bind:imagen="alimento.image"
              v-bind:precio="alimento.price"
              v-bind:categoria="'alimentos'">
        </Menu>
      </div>

      <div class="seccion" v-if="name==='juguetes'">
        <Menu v-for="(juguete, index) in juguetes" v-bind:key="index"
              v-bind:nombre="juguete.name"
              v-bind:imagen="juguete.image"
              v-bind:precio="juguete.price"
              v-bind:categoria="'juguetes'">
        </Menu>
      </div>

      <div class="seccion" v-if="name==='higiene'">
        <Menu v-for="(higiene, index) in higiene" v-bind:key="index"
              v-bind:nombre="higiene.name"
              v-bind:imagen="higiene.image"
              v-bind:precio="higiene.price"
              v-bind:categoria="'higiene'">
        </Menu>
      </div>

      <p class="botonVolver" @click="irAProductos">VOLVER A TODOS LOS PRODUCTOS</p>
    </div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Menu from "./Menu";
import {productos} from "../assets/js/ProdServ";
import {snacks} from "../assets/js/ProdServ";
import {alimentos} from "../assets/js/ProdServ";
import {juguetes} from "../assets/js/ProdServ";
import {higiene} from "../assets/js/ProdServ";

export default {
  name: "Producto",
  components: {
    Header,
    NavBar,
    Footer,
    Menu
  },
  data() {
    return {
      productos: productos,
      snacks: snacks,
      alimentos: alimentos,
      juguetes: juguetes,
      higiene: higiene,
      name: "",
      description: "",
      image:""
    }
  },
  methods:{
    info(productoSeleccionado){
      for (let producto of this.productos){
        if(producto.name == productoSeleccionado){
          this.name = producto.name
          this.description = producto.description
          this.image = require('../assets/img/prodServ/' + producto.image)
          console.log(this.name)
        }
      }
    },
    irAProductos(){
      this.$router.go(-1)
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
  border-radius:40px;
  background-color: #af9c9f;
  color:white;
  padding:20px;
  margin-top:40px;
  font-size:12px;
}
.seccion{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
}
</style>