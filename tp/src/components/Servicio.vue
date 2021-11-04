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
      image:""
    }
  },
  methods:{
    info(productoSeleccionado){
      for (let producto of this.productos){
        if(producto.name == productoSeleccionado){
          this.description = producto.description
          this.image = require('../assets/img/prodServ/' + producto.image)
        }
      }
    },
    irAServicios(){
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
</style>