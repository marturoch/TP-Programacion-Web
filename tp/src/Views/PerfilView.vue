<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <div class="hola">
      <div class="secciones">
        <p @click="todoFalse(); datosFunction()" :class="{seccionMarcada:datos}" id="datos">Mis Datos</p>
        <p @click="todoFalse(); passwordFunction()" :class="{seccionMarcada:password}" id="contraseña">Cambiar contraseña</p>
        <p @click="todoFalse(); salirFunction()" :class="{seccionMarcada:salir}" id="salir">Salir</p>
      </div>


      <div class="seccion" v-if="datos">
        <h2>Mis Datos</h2>
          <div class="datos_usuario">
            <h3>Nombre: {{perfil["name"]}}</h3>
            <h3>Apellido: {{perfil["surname"]}}</h3>
            <h3>Email: {{perfil["email"]}}</h3>
            <h3>Id: {{perfil["user_id"]}}</h3>
          </div>
        <p>{{mensaje_error}}</p>
        <h3 class="eliminar_cuenta" @click="eliminarCuenta()">Borrar Cuenta</h3>
      </div>

      <div class="seccion" v-if="pass">
        <h2>Cambiar contraseña</h2>
        <form  @submit.prevent="cambiar_password()">
          <br>
          <label>Contraseña nueva: </label><input type="password" required v-model="newpassword">
          <br>
          <p>{{mensaje}}</p>
          <br><br><br>
          <input type="submit" class="cambiar" value="CAMBIAR">
        </form>
      </div>

      <div class="seccion" v-if="salir">
        <h1>Salir</h1>
      </div>

    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";

export default {
  name: "PerfilView",
  components:{
    Header,
    NavBar,
    Footer
  },
  data(){
    return{
      datos: false,
      pass: false,
      salir: false,
      status: 'logged',
      newpassword: "",
      mensaje: "",
      mensaje_error: "",
      perfil: JSON.parse(localStorage.getItem('perfil'))
    }
  },
  methods:{
    todoFalse(){
      this.datos = false;
      this.pass = false;
      this.salir = false;
    },
    datosFunction(){
      this.datos = true;
    },
    passwordFunction(){
      this.pass = true;
    },
    salirFunction(){
      this.status = 'notlogged'
      localStorage.removeItem('status')
      localStorage.removeItem('perfil')
      this.$router.push("/")
      localStorage.removeItem('pedidos')
    },
    cambiar_password() {
      let id_usuario = this.perfil["user_id"];
      axios.put('http://localhost:5000/api/v1/registros/' + id_usuario,
          {
              newpassword: this.newpassword
            })
          .then(response => {
            console.log(response)
            this.mensaje = response.data["mensaje"]
              })
          .catch(error => {
            console.log("Server Error in cambiar_password()" + error)
            this.mensaje = "Tu contraseña no se ha podido actualizar"
            })
      },
    eliminarCuenta() {
      let id_usuario = this.perfil["user_id"];
      axios.delete('http://localhost:5000/api/v1/registros/' + id_usuario)
          .then(response => {
            const resultado = window.confirm("¿Estás seguro que deseas eliminar tu cuenta?");
            if (resultado === true) {
              localStorage.removeItem('status')
              localStorage.removeItem('perfil')
              this.status = 'notlogged'
              this.$router.push('/')
            }
            console.log(response)})
          .catch(error => {
            console.log("Server Error in eliminarCuenta()" + error)
            this.mensaje_error = "Tu cuenta no se ha podido eliminar"
        })
    },
  mounted(){
    if(!localStorage.status){
      this.$router.push("/login")
    }
  }}
}
</script>

<style scoped>
@import "../assets/css/perfilView.css";
</style>
