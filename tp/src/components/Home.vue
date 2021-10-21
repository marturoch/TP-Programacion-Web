<template>
  <div>
    <Header></Header>

    <div  id="home-container">
      <NavBar v-on:menuEvent="showMenuOption($event)"></NavBar>
    </div>

    <div>
      <Main v-if="menu.inicio" v-on:menuEvent="showMenuOption($event)"></Main>
      <Productos v-if="menu.productos" v-on:menuEvent="showMenuOption($event)"></Productos>
      <Servicios v-if="menu.servicios" v-on:menuEvent="showMenuOption($event)"></Servicios>
      <Planes v-if="menu.planes" v-on:menuEvent="showMenuOption($event)"></Planes>
      <Red v-if="menu.red" v-on:menuEvent="showMenuOption($event)"></Red>
    </div>
    <Cotizacion></Cotizacion>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Productos from "@/components/Productos"
import Servicios from "@/components/Servicios"
import Planes from "@/components/Planes";
import Red from "@/components/Red";
import Cotizacion from "@/components/Cotizacion";

export default {
  name: 'Home.vue',
  components: {
    Cotizacion,
    Header,
    NavBar,
    Main,
    Footer,
    Productos,
    Servicios,
    Planes,
    Red
  },
  data() {
    return {
      menu: {
        activeOption: 'inicio',
        inicio: true,
        productos: false,
        servicios: false,
        planes: false,
        red: false
      }
    }
  },
  methods: {
    showMenuOption(option) {
      let oldOption = this.menu.activeOption;
      this.menu.activeOption = option;
      this.menu[oldOption] = false;
      this.menu[this.menu.activeOption] = true;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
