<template>
  <div>
    <Header></Header>
    <NavBar></NavBar>
    <div class="hola">
      <div class="secciones">
        <p @click="todoFalse(); datosFunction()" :class="{seccionMarcada:datos}" id="datos">Mis Datos</p>
        <p @click="todoFalse(); pedidosFunction()" :class="{seccionMarcada:pedidos}" id="pedidos">Pedidos</p>
        <p @click="todoFalse(); mascotasFunction()" :class="{seccionMarcada:mascotas}" id="mascotas">Mis mascotas</p>
        <p @click="todoFalse(); salirFunction()" :class="{seccionMarcada:salir}" id="salir">Salir</p>
      </div>

      <div class="seccion" v-if="datos">
        <h1>datos</h1>
      </div>

      <div class="seccion" v-if="pedidos">
        <h1>pedidos</h1>
      </div>

      <div class="seccion" v-if="mascotas">
        <h1>Mascotas</h1>
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
      pedidos: false,
      mascotas: false,
      salir: false,
      status: 'logged'
    }
  },
  methods:{
    todoFalse(){
      this.datos = false;
      this.pedidos = false;
      this.mascotas = false;
      this.salir = false;
    },
    datosFunction(){
      this.datos = true;
    },
    pedidosFunction(){
      this.pedidos = true;
    },
    mascotasFunction(){
      this.mascotas = true;
    },
    salirFunction(){
      this.status = 'notlogged'
      localStorage.removeItem('status')
      localStorage.removeItem('perfil')
      this.$router.push("/")
    }
  },
  mounted(){
    if(!localStorage.status){
      this.$router.push("/login")
    }
  }
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
#pedidos:hover {
  cursor: pointer;
  opacity: 90%;
}
#mascotas:hover {
  cursor: pointer;
  opacity: 90%;
}
#salir:hover {
  cursor: pointer;
  opacity: 90%;
}
</style>
