<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <div class ="carrito-container">
      <div>
        <h2>TU CARRITO</h2>
        <div id="carrito">
          <form>
            <table>
              <thead>
                <tr>
                  <th class = "eliminar"></th>
                  <th class="imagen"></th>
                  <th class="nombre-producto">PRODUCTO</th>
                  <th class="precio-producto">PRECIO</th>
                  <th class="cantidad-producto">CANTIDAD</th>
                  <th class="subtotal-producto">SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class = "eliminar"></td>
                  <td class="imagen"></td>
                  <td class="nombre-producto" data-title="Producto">""</td>
                  <td class="precio-producto" data-title="Precio">""</td>
                  <td class="cantidad-producto" data-title="Cantidad">""</td>
                  <td class="subtotal-producto" data-title="Subtotal">""</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      <div>
        <h2>Total del carrito</h2>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default {
  name: "Carrito",
  components:{
    Header,
    NavBar,
    Footer
  }
}
</script>

<style scoped>

#carrito {
  color: black;
  align-items: center;
}
table {
  background-color: white;
  text-align: center;
  align-items: center;
  width: 1200px;
  border: #D90368;
}

.carrito-container {
  display: inline-block;
  border-width: 10px;
  border-color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black
}

</style>