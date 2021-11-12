import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(VueRouter)

//Components
import App from './App.vue'
import PlanesView from "./Views/PlanesView";
import RedView from "./Views/RedView";
import RecomendacionView from "./Views/RecomendacionView";
import PerfilView from "./Views/PerfilView";
import ProductsView from "./Views/ProductsView";
import ServicesView from "./Views/ServicesView";
import HomeView from "./Views/HomeView";
import Producto from "./components/Producto";
import Servicio from "./components/Servicio";
import NotFoundView from "./Views/NotFoundView";
import Carrito from "./components/Carrito";
import Registrarse from "./components/Registrarse";
import RegistroExitoso from "./components/RegistroExitoso";
import minicarrito from "./components/minicarrito";
import login from "./components/login";
import PedidoExitoso from "./components/PedidoExitoso";
import PedidoRechazado from "./components/PedidoRechazado";
import RegistroRechazado from "./components/RegistroRechazado";
import PerroAgregadoExitosamente from "./components/PerroAgregadoExitosamente";
import PerroRechazado from "./components/PerroRechazado";
import PerroEliminadoExitosamente from "./components/PerroEliminadoExitosamente";
import PerroSinEliminar from "./components/PerroSinEliminar";

const routes = [
  {path: '/', name: "Home", component:HomeView},
  {path: '/productos', name: "Productos", component:ProductsView},
  {path: '/productos/:nombre', name: "Producto",component: Producto},
  {path: '/planes', name: "Planes", component:PlanesView},
  {path: '/servicios', name: "Servicios", component:ServicesView},
  {path: '/servicios/:nombre', name: "Servicio", component:Servicio},
  {path: '/red-de-mascotas', name: "Red", component:RedView},
  {path: '/red-de-mascotas/agregado', name: "PerroAgregadoExitosamente", component:PerroAgregadoExitosamente},
  {path: '/red-de-mascotas/rechazado', name: "PerroRechazado", component:PerroRechazado},
  {path: '/red-de-mascotas/eliminado', name: "PerroEliminadoExitosamente", component:PerroEliminadoExitosamente},
  {path: '/red-de-mascotas/sin-eliminar', name: "PerroSinEliminar", component:PerroSinEliminar},
  {path: '/recomendacion', name: "Recomendacion", component:RecomendacionView},
  {path: '/login', name:"Login", component:login},
  {path: '/perfil', name:"Perfil", component:PerfilView},
  {path: '/carrito', name:"Carrito", component:Carrito},
  {path: '/minicarrito', name:"minicarrito", component: minicarrito},
  {path: '/registro', name:"Registro", component:Registrarse},
  {path: '/registro/exitoso', name:"RutaRegistroExitoso", component:RegistroExitoso},
  {path: '/registro/rechazado', name:"RutaRegistroRechazado", component:RegistroRechazado},
  {path: '/carrito/pedidoExitoso', name:"PedidoExitoso", component:PedidoExitoso},
  {path: '/carrito/pedidoRechazado', name:"PedidoRechazado", component:PedidoRechazado},
  {path: '/*', component:NotFoundView}
]

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
