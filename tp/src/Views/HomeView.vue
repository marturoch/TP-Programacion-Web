<template>
  <div>
    <Header v-bind:info_perfil="this.$route.params['info_perfil']"></Header>
    <NavBar></NavBar>
    <banners></banners>
    <Main></Main>
    <RecomendacionBoton></RecomendacionBoton>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import RecomendacionBoton from "../components/RecomendacionBoton";
import banners from "../components/banners";

export default {
  name: 'HomeView.vue',
  components: {
    banners,
    Header,
    NavBar,
    Main,
    RecomendacionBoton,
    Footer
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
