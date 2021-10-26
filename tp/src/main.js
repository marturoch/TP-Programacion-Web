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
import Formulario from "./components/Formulario";

const routes = [
  {path: '/', name: "Home", component:Home},
  {path: '/planes', name: "Planes", component:Planes},
  {path: '/productos', name: "Productos", component:Productos},
  {path: '/servicios', name: "Servicios", component:Servicios},
  {path: '/red-de-mascotas', name: "Red", component:Red},
  {path: '/planes/formulario', name: "Formulario", component:Formulario},
  {path: '/*', component:NotFound}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
