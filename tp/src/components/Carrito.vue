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
                <th class="nombre-producto"></th>
                <th class="nombre-producto">TIPO</th>
                <th class="precio-producto">PRECIO</th>
                <th class="cantidad-producto">CANTIDAD</th>
                <th class="subtotal-producto">SUBTOTAL</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(pedido, index) in pedidos" v-bind:key="index">
                <td class ="eliminar" @click="removeItem(index)">x</td>
                <td class="nombre-producto" data-title="Producto">{{pedido.name}}</td>
                <td class="tipo" data-title="Tipo">{{pedido.tipo}}</td>
                <td class="precio-producto" data-title="Precio">${{pedido.price}}</td>
                <td class="cantidad-producto" data-title="Cantidad">
                  {{pedido.quantity}}
                  <p @click="modificar(pedido, pedido.tipo)" id="botonModificar">MODIFICAR</p>
                </td>
                <td class="subtotal-producto" data-title="Subtotal">${{pedido.subtotal}}</td>
              </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
      <div>
        <h2>Total del carrito: $ {{total}}</h2>
      </div>
      <div>
        <p class="checkout" @click="checkout()">CHECKOUT</p>
      </div>

      <div v-if="checkOut" class="informacion_cliente">
        <br>
        <h3>Detalles del cliente </h3>
        <form @submit.prevent=pedido()>
          <div id="nom_y_ap">
            <div>
              <label for="nombre">NOMBRE<span class="required-field">*</span></label><br>
              <input type="name" name="" required id="nombre" autocomplete v-model="name">
              <br><br>
            </div>
            <div>
              <label for="apellido">APELLIDO<span class="required-field">*</span></label><br>
              <input type="family-name" required name="" id="apellido" autocomplete v-model="surname">
              <br><br>
            </div>
          </div>

          <div id="direc">
            <label for="direc">DIRECCIÓN<span class="required-field">*</span></label><br>
            <input autocomplete type="street-address" name="" v-model="address" id="direc" required placeholder="Nombre y Número de la Calle">
            <br><br>
          </div>

          <div id="localidad">
            <label for="localidad">LOCALIDAD/CIUDAD<span class="required-field">*</span></label><br>
            <input autocomplete type="text" name="" id="localidad" v-model="location" required>
            <br><br>
          </div>

          <div id="codigo_postal">
            <label for="cp">CÓDIGO POSTAL<span class="required-field">*</span></label><br>
            <input autocomplete type="postal-code" name="" id="cp" v-model="postalCode" required>
            <br><br>
          </div>

          <div id="telefono">
            <label for="tel">TELÉFONO<span class="required-field">*</span></label><br>
            <input autocomplete type="tel" name="" id="tel" v-model="phoneNumber" required>
            <br><br>
          </div>

          <div id="email">
            <label for="email">DIRECCIÓN DE CORREO ELECTRÓNICO<span class="required-field">*</span></label><br>
            <input autocomplete type="email" required name="" id="email" v-model="email">
            <br><br>
          </div>
          <br><br><br>
          <div id="nota">
            <label for="nota">NOTAS DEL PEDIDO (OPCIONAL)</label><br>
            <br>
            <textarea name = "comentarios" rows = "10" cols = "50" v-model="coments"></textarea>
            <br><br>
          </div>
          <div>
            <input type="submit" class="hacer_pedido" value="HACER PEDIDO">
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
    checkout(){
      if (!localStorage.status){
        this.$router.push("/login?check=true")
      }
      else{
        this.checkOut = true
      }
    },
    removeItem(index){
      this.pedidos.splice(index,1)
      localStorage.setItem('pedidos', JSON.stringify(this.pedidos))

    },
    modificar(pedido, tipo){
      if (tipo === "snacks" || tipo === "alimentos" || tipo === "juguetes" || tipo === "higiene") {
        this.$router.push('/productos/' + tipo)
      }
      else if (tipo === "plan"){
        this.$router.push('/planes/')
      }
      else if (tipo === "servicio"){
        this.$router.push('/servicios/' + pedido.name)
      }
    },
    pedido(){
      axios.post("http://localhost:5000/api/v1/orders",
          {
            name: this.name,
            surname: this.surname,
            address: this.address,
            phoneNumber: this.phoneNumber,
            location: this.location,
            postalCode: this.postalCode,
            email: this.email,
            pedidos: this.pedidos
          })
          .then(response => {
            console.log(response)
            this.$router.push({name:"PedidoExitoso", params:{name: this.name}})
            localStorage.removeItem("pedidos")
          })
          .catch (error => {
            console.log("Server Error in pedido()" + error)
            this.$router.push({name:"PedidoRechazado", params:{name: this.name}})
          })
    }
  },
  data() {
    return {
      name: "",
      surname: "",
      address: "",
      phoneNumber: "",
      location:"",
      postalCode:"",
      email:"",
      coments: "",
      pedidos: [],
      checkOut: false,
      total: "",
      categoria: ""
    }
  },
  watch:{
    pedidos(nuevoPedido){
      localStorage.setItem('pedidos', JSON.stringify(nuevoPedido))
      let contador = 0
      for (let pedido of nuevoPedido){
        contador += pedido.subtotal
      this.total = contador
      }
    }
  },
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
