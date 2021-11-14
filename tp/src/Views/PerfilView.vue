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
            <h3>Nombre: {{this.name}}</h3>
            <h3>Apellido: {{this.surname}}</h3>
            <h3>Email: {{this.email}}</h3>
            <h3>Id: {{this.id}}</h3>
          </div>
        <p>{{mensaje_error}}</p>
        <h3 class="eliminar_cuenta" @click="eliminarCuenta()">Borrar Cuenta</h3>
      </div>

      <div class="seccion" v-if="pass">
        <h2>Cambiar contraseña</h2>
        <form  @submit.prevent="cambiar_password()">
          <br>
          <label>Contraseña nueva: </label><input type="password" v-model="newpassword">
          <br>
          <p>{{mensaje}}</p>
          <br><br><br>
          <input type="submit" value="CAMBIAR">
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
      password: this.$route.params["info_perfil"]["password"],
      email: this.$route.params["info_perfil"]["email"],
      name: this.$route.params["info_perfil"]["name"],
      surname: this.$route.params["info_perfil"]["surname"],
      id: this.$route.params["info_perfil"]["user_id"],
      mensaje: "",
      mensaje_error: ""
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
    },
    cambiar_password() {
      let id_usuario = this.id;
      axios.put('http://localhost:5000/api/v1/registros/' + id_usuario,
          {
              newpassword: this.newpassword
            })
          .then(response => {
            console.log(response)
            this.mensaje = "Tu contraseña se ha actualizado correctamente"
              })
          .catch(error => {
            console.log(error)
            })
      },
    eliminarCuenta() {
      let id_usuario = this.id;
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
            console.log(error)
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
.secciones{
  display:flex;
  flex-direction:column;
  background-color: #820263;
  color:white;
  padding:20px;
  border-radius:5%;
}

.hola{
  padding:20px;
  display:flex;
  align-items: center;
}
.seccion{
  flex-basis: 80%;

}
.seccionMarcada{
  color: #CE6AAEF7;
}

#datos:hover {
  cursor: pointer;
  opacity: 90%;
}
#contraseña:hover {
  cursor: pointer;
  opacity: 90%;
}

#salir:hover {
  cursor: pointer;
  opacity: 90%;
}
.datos_usuario {
  display: block;
  color: white;
  align-items: center;
  margin-left: 300px;
  font-size: 20px;
  background-color: darkgray;
  width: 50%;
  text-align: left;
  border: 20px;
  padding: 20px

}
.eliminar_cuenta {
  text-decoration: none;
  color:white;
  background-color: #820263;
  border-radius: 100px;
  margin-left: 518px;
  height: 50px;
  width: 200px;
  padding-top: 20px;
}
.eliminar_cuenta:hover {
  cursor: pointer;
}
</style>
