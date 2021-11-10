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
              <tr v-for="(pedido, index) in pedidos" v-bind:key="index">
                <td class = "eliminar"></td>
                <td class="imagen"></td>
                <td class="nombre-producto" data-title="Producto">{{pedido.name}}</td>
                <td class="precio-producto" data-title="Precio">$ {{pedido.price}}</td>
                <td class="cantidad-producto" data-title="Cantidad">{{pedido.quantity}}</td>
                <td class="subtotal-producto" data-title="Subtotal">"{{subtotal}}"</td>
              </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      <div>
        <p @click="checkout()">CHECKOUT</p>
      </div>
      <div>
        <h2>Total del carrito</h2>
      </div>

      <div v-if="checkOut" class="informacion_cliente">
        <br>
        <h3>Detalles del cliente </h3>
        <form action="">
          <div id="nom_y_ap">
            <div>
              <label for="nombre">NOMBRE *</label><br>
              <input type="name" name="" required id="nombre" autocomplete v-model="name">
            </div>
            <div>
              <label for="apellido">APELLIDO *</label><br>
              <input type="family-name" required name="" id="apellido" autocomplete v-model="surname">
            </div>
          </div>

          <div id="direc">
            <label for="direc">DIRECCIÓN</label><br>
            <input autocomplete type="street-address" name="" v-model="address" id="direc" required placeholder="Nombre y Número de la Calle">
          </div>

          <div id="localidad">
            <label for="localidad">LOCALIDAD/CIUDAD *</label><br>
            <input autocomplete type="text" name="" id="localidad" v-model="localidad" required>
          </div>

          <div id="codigo_postal">
            <label for="cp">CÓDIGO POSTAL</label><br>
            <input autocomplete type="postal-code" name="" id="cp" v-model="postalCode" required>
          </div>

          <div id="telefono">
            <label for="tel">TELÉFONO</label><br>
            <input autocomplete type="tel" name="" id="tel" v-model="phoneNumber" required>
          </div>

          <div id="email">
            <label for="email">DIRECCIÓN DE CORREO ELECTRÓNICO</label><br>
            <input autocomplete type="email" required name="" id="email" v-model="email">
          </div>
          <br><br><br>
          <div id="nota">
            <label for="nota">NOTAS DEL PEDIDO (OPCIONAL)</label><br>
            <br>
            <textarea name = "comentarios" rows = "10" cols = "50" v-model="coments"></textarea>
            <br><br>
          </div>
          <div>
            <button>HACER PEDIDO</button>
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
import axios from "axios"

export default {
  name: "Carrito",
  created() {
  axios.get("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
    console.log(result.data);
  })
},
  components:{
    Header,
    NavBar,
    Footer
  },
  methods: {
    orderCart() {
      axios.post("http://localhost:5000/api/v1/orders",{
        user: this.name,
        surname: this.surname,
        address: this.address,
        phone_number: this.phoneNumber,
        localidad: this.localidad,
        postalCode: this.postalCode,
        email: this.email,
        coments: this.coments,
        shopping_cart: this.$route.params['shoppingCart'],
      })
      .then(response => {
        console.log(response)
        this.$router.push({name: "CheckoutSuccessRoute", params: {order_id: response.data["order_id"]}})
      })
      .catch(error => {
        console.log(error);
        this.$router.push({name: "CheckoutServerErrorRoute"})
      })
},
  checkout(){
      if (!localStorage.status){
        this.$router.push("/login?check=true")
      }
      else{
        this.checkOut = true
      }
  }
  },
  data() {
    return {
      name: "",
      surname: "",
      address: "",
      phoneNumber: "",
      localidad:"",
      postalCode:"",
      email:"",
      coments: "",
      pedidos: [],
      checkOut: false,
      subtotal: "$"
    }
  },
  /*watch:{
    pedidos(nuevoPedido){
      this.subtotal = nuevoPedido.quantity * nuevoPedido.price
    }
  },*/
  mounted(){
    if(localStorage.pedidos){
      this.pedidos = JSON.parse(localStorage.pedidos)
    }
    if(localStorage.status){
      this.status = JSON.parse(localStorage.status)
    }
  }
}
</script>

<style scoped>

@import "../assets/css/carrito.css";

</style>