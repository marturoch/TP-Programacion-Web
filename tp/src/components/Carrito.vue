<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <div class ="carrito-container">
      <div>
        <h2>TU CARRITO</h2>
        <div id="carrito">
          <form>
            <table id="table-carrito">
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
        <h2 v-if="hayTotal">Total del carrito: $ {{total}}</h2>
      </div>
      <div>
        <p v-if="hayTotal" class="checkout" @click="checkout()">CHECKOUT</p>
        <h3 v-if="!hayTotal">Todavia no has agregado productos a tu carrito</h3>
      </div>


      <div v-if="checkOut" class="informacion_cliente">
        <br>
        <h3>Detalles del cliente </h3>
        <form @submit.prevent=pedido()>
          <div id="nom_y_ap">
            <div>
              <label class="label-carrito" for="nombre">NOMBRE<span class="required-field">*</span></label><br>
              <input class="input-carrito" type="name" name="" required id="nombre" autocomplete v-model="name">
              <br><br>
            </div>
            <div>
              <label class="label-carrito"  for="apellido">APELLIDO<span class="required-field">*</span></label><br>
              <input class="input-carrito" type="family-name" required name="" id="apellido" autocomplete v-model="surname">
              <br><br>
            </div>
          </div>

          <div id="direc">
            <label class="label-carrito"  for="direc">DIRECCIÓN<span class="required-field">*</span></label><br>
            <input class="input-carrito" autocomplete type="street-address" name="" v-model="address" required placeholder="Nombre y Número de la Calle">
            <br><br>
          </div>

          <div id="localidad">
            <label class="label-carrito"  for="localidad">LOCALIDAD/CIUDAD<span class="required-field">*</span></label><br>
            <input class="input-carrito" autocomplete type="text" name="" v-model="location" required>
            <br><br>
          </div>

          <div id="codigo_postal">
            <label class="label-carrito"  for="cp">CÓDIGO POSTAL<span class="required-field">*</span></label><br>
            <input class="input-carrito" autocomplete type="postal-code" name="" id="cp" v-model="postalCode" required>
            <br><br>
          </div>

          <div id="telefono">
            <label  class="label-carrito" for="tel">TELÉFONO<span class="required-field">*</span></label><br>
            <input class="input-carrito" autocomplete type="number" name="" id="tel" v-model="phoneNumber" required>
            <br><br>
          </div>

          <div id="email">
            <label class="label-carrito"  for="email">DIRECCIÓN DE CORREO ELECTRÓNICO<span class="required-field">*</span></label><br>
            <input class="input-carrito" autocomplete type="email" required name=""  v-model="email">
            <br><br>
          </div>
          <br><br><br>
          <div id="nota">
            <label class="label-carrito"  for="nota">NOTAS DEL PEDIDO (OPCIONAL)</label><br>
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
      if (this.pedidos.length === 0){
        this.hayTotal = false
      }
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
      categoria: "",
      hayTotal: true
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
    if(this.pedidos.length === 0){
      this.hayTotal = false
    }
    if(localStorage.status){
      this.status = JSON.parse(localStorage.status)
    }
  }
}
</script>

<style scoped>
#carrito {
  color: black;
  align-items: center;
}
#table-carrito {
  background-color: rgba(0,0,0,.04);
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
.encabezado {
  background-color: lightgrey;
  color: black;
  font-weight: bold;
}

.label-carrito, .input-carrito {
  flex-direction:column;
  margin: 10px;
  padding: 10px
}
.input-carrito {
  box-sizing: border-box;
  width: 300px;
  line-height: 2px;
  background-color: rgba(0,0,0,.07)
}

.informacion_cliente {
  margin: auto;
  width: 50%;
  background-color: rgba(0,0,0,.04);
}

th, thead {
  padding: 20px
}
tbody, td {
  padding: 10px
}

#carrito {
  color: black;
  align-items: center;
}
.carrito-container {
  display: inline-block;
  border-width: 10px;
  border-color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black
}
.eliminar {
  color: red;
  font-size: 30px;

}
.eliminar:hover {
  cursor: pointer
}

.checkout {
  width: auto;
  color: white;
  background-color: #820263;
  border: solid 1px;
  border-color: #820263;
  border-radius: 5px;
  padding: 20px;
}
.checkout:hover {
  cursor: pointer;

}

.hacer_pedido {
  width: auto;
  color: white;
  background-color: #820263;
  border: solid 1px;
  border-color: #820263;
  border-radius: 5px;
  padding: 20px;
}
.hacer_pedido:hover {
  cursor: pointer;
}
#botonModificar{
  color:#A82885;
  font-weight: bold;
  margin-left:20px;
  text-decoration:underline;
}
#botonModificar:hover{
  cursor:pointer
}
.input-carrito[type=number]::-webkit-inner-spin-button,
.input-carrito[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
