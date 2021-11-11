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

const routes = [
  {path: '/', name: "Home", component:HomeView},
  {path: '/productos', name: "Productos", component:ProductsView},
  {path: '/productos/:nombre', name: "Producto",component: Producto},
  {path: '/planes', name: "Planes", component:PlanesView},
  {path: '/servicios', name: "Servicios", component:ServicesView},
  {path: '/servicios/:nombre', name: "Servicio", component:Servicio},
  {path: '/red-de-mascotas', name: "Red", component:RedView},
  {path: '/recomendacion', name: "Recomendacion", component:RecomendacionView},
  {path: '/login', name:"Login", component:login},
  {path: '/perfil', name:"Perfil", component:PerfilView},
  {path: '/carrito', name:"Carrito", component:Carrito},
  {path: '/minicarrito', name:"minicarrito", component: minicarrito},
  {path: '/registro', name:"Registro", component:Registrarse},
  {path: '/registro/exitoso', name:"RutaRegistroExitoso", component:RegistroExitoso},
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
