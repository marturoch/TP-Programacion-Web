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
import {productos} from "@/assets/js/ProdServ";

export default {
  name: "Producto",
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      productos: productos,
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
  margin: 0px 200px;
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
</style>