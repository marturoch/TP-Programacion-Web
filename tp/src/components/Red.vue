<template>
  <div>
    <Header></Header>
    <div  id="home-container">
      <NavBar ></NavBar>
    </div>

    <div>
      <H1>RED</H1>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: 'Red',
  components: {
    Header,
    NavBar,
    Footer
  }
}
</script>

<style scoped>

</style>