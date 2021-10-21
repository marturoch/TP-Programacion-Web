<template>
  <div>
    <header></header>
    <h1>Planes</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import{planes} from "@/assets/js/planes.js"
export default {
  name: "Planes",
  data() {
    return {
      planes: planes
    }
  }
}
</script>

<style scoped>

</style>