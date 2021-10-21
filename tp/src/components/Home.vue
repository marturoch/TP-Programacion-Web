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
    </div>

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

export default {
  name: 'Home',
  components: {
    Header,
    NavBar,
    Main,
    Footer,
    Productos,
    Servicios
  },
  data() {
    return {
      menu: {
        activeOption: 'inicio',
        inicio: true,
        productos: false,
        servicios: false
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
