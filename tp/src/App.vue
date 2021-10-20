<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Home msg="TITLE"/>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Footer,
    // eslint-disable-next-line vue/no-unused-components
    Header,
    // eslint-disable-next-line vue/no-unused-components
    Home,
    // eslint-disable-next-line vue/no-unused-components
    NavBar

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
