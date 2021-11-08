<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <h1>PRODUCTOS</h1>
    <div class="todosProductos" v-if="showall">
      <ProductItem v-for="(producto, index) in productos" v-bind:key="index"
                    v-bind:name="producto.name"
                    v-bind:image="producto.image"
                    v-bind:description="producto.description"
                    v-bind:tipo="tipo"
                    v-on:addItem="addItemToCart($event)">
      </ProductItem>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import {productos} from "../assets/js/ProdServ";
import Footer from "./Footer";
import ProductItem from "./ProductItem";

export default {
  name: "PedidoProductos",
  components: {
    Header,
    NavBar,
    Footer,
    ProductItem
  },
  data() {
    return {
      tipo: "productos",
      productos: productos,
      showall: true,
    }
  },
  methods: {
    addItemToCart (item) {
      this.$emit("pushItem", item)
    }
  }
}
</script>

<style scoped>
.planes-container{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom:50px;
}
.plan-container{
  display:flex;
  border: 2px solid black;
  border-radius: 10px;
  flex-direction:column;
  justify-content: space-between;
  padding:0px 5px 20px 5px;
  align-items: center;
  width:22%;
  height:550px;
  background-color: white;
}

</style>