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
              <thead class="encabezado">
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
      <div class="informacion_cliente">
        <br>
        <h3>Detalles del cliente </h3>
        <form action="">
          <div id="nom_y_ap">
            <div>
              <label for="nombre">NOMBRE *</label><br>
              <input type="name" name="" id="nombre" autocomplete>
            </div>
            <div>
              <label for="apellido">APELLIDO *</label><br>
              <input type="family-name" name="" id="apellido" autocomplete>
            </div>
          </div>

          <div id="direc">
            <label for="direc">DIRECCIÓN</label><br>
            <input autocomplete type="street-address" name="" id="direc" placeholder="Nombre y Número de la Calle">
          </div>

          <div id="localidad">
            <label for="localidad">LOCALIDAD/CIUDAD *</label><br>
            <input autocomplete type="text" name="" id="localidad">
          </div>

          <div id="codigo_postal">
            <label for="cp">CÓDIGO POSTAL</label><br>
            <input autocomplete type="postal-code" name="" id="cp">
          </div>

          <div id="telefono">
            <label for="tel">TELÉFONO</label><br>
            <input autocomplete type="tel" name="" id="tel">
          </div>

          <div id="email">
            <label for="email">DIRECCIÓN DE CORREO ELECTRÓNICO</label><br>
            <input autocomplete type="email" name="" id="email">
          </div>
          <br><br><br>
          <div id="nota">
            <label for="nota">NOTAS DEL PEDIDO (OPCIONAL)</label><br>
            <br>
            <textarea name = "comentarios" rows = "10" cols = "50"></textarea>
            <br><br>
          </div>

        </form>
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

@import "../assets/css/carrito.css"

</style>