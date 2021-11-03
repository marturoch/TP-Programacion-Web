import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(VueRouter)

//Components
import App from './App.vue'
import PlanesView from "./Views/PlanesView";
import RedView from "./Views/RedView";
import RecomendacionView from "./Views/RecomendacionView";
import login from "./components/login";
import PerfilView from "./Views/PerfilView";
import ProductsView from "./Views/ProductsView";
import ServicesView from "./Views/ServicesView";
import HomeView from "./Views/HomeView";
import Producto from "./components/Producto";
import Servicio from "./components/Servicio";
import NotFoundView from "./Views/NotFoundView";

const routes = [
  {path: '/', name: "Home", component:HomeView},
  {path: '/productos', name: "Productos", component:ProductsView},
  {path: '/productos/:nombre', name: "Producto",component: Producto},
  {path: '/planes', name: "Planes", component:PlanesView},
  {path: '/planes/:nombre', name: "Plan", component:PlanesView},
  {path: '/servicios', name: "Servicios", component:ServicesView},
  {path: '/servicios/:nombre', name: "Servicio", component:Servicio},
  {path: '/red-de-mascotas', name: "Red", component:RedView},
  {path: '/recomendacion', name: "Recomendacion", component:RecomendacionView},
  {path: '/login', name:"Login", component:login},
  {path: '/perfil', name:"Perfil", component:PerfilView},
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
