<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <h1>PRODUCTOS</h1>
    <div class="todosProductos" v-if="showall">
      <ProdServMenu v-for="(producto, index) in productos" v-bind:key="index"
                    v-bind:name="producto.name"
                    v-bind:image="producto.image"
                    v-bind:description="producto.description"
                    v-bind:tipo="tipo">
      </ProdServMenu>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProdServMenu from "../components/ProdServMenu";
import {productos} from "../assets/js/ProdServ";
import Footer from "../components/Footer";

export default {
  name: "ProductsView",
  components: {
    Header,
    NavBar,
    ProdServMenu,
    Footer
  },
  data() {
    return {
      tipo: "productos",
      productos: productos,
      showall: true,
    }
  }
}
</script>
<style scoped>
.todosProductos{
  display:flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

</style>