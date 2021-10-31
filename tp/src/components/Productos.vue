<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <h1>Productos</h1>
    <div class="productos-container">
      <ProdServMenu v-for="(producto, index) in productos" v-bind:key="index"
                    v-bind:name="producto.name"
                    v-bind:image="producto.image"
                    v-bind:description="producto.description">
      </ProdServMenu>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import ProdServMenu from "@/components/ProdServMenu";
import {productos} from "@/assets/js/ProdServ";
import Footer from "./Footer";

export default {
  name: "Productos",
  components: {
    Header,
    NavBar,
    ProdServMenu,
    Footer
  },
  data(){
    return{
      productos: productos
    }
  }
}
</script>

<style scoped>
.productos-container{
  display:flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>