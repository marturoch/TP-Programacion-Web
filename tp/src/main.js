import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(VueRouter)

//Components
import App from './App.vue'
import Home from "@/components/Home";
import NotFound from "@/components/NotFound";
import Planes from "./components/Planes";
import Productos from "./components/Productos";
import Servicios from "./components/Servicios";
import Red from "./components/Red";
import Recomendacion from "./components/Recomendacion";
import LogIn from "./components/LogIn";
import Perfil from "./components/Perfil";

const routes = [
  {path: '/', name: "Home", component:Home},
  {path: '/planes', name: "Planes", component:Planes},
  {path: '/productos', name: "Productos", component:Productos},
  {path: '/servicios', name: "Servicios", component:Servicios},
  {path: '/red-de-mascotas', name: "Red", component:Red},
  {path: '/recomendacion', name: "Recomendacion", component:Recomendacion},
  {path: '/login', name:"Login", component:LogIn},
  {path: '/perfil', name:"Perfil", component:Perfil},
  {path: '/*', component:NotFound}
]

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
