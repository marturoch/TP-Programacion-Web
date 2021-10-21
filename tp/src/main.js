import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(VueRouter)

//Components
import App from './App.vue'
import Home from "@/components/Home";
import NotFound from "@/components/NotFound";

const routes = [
  {path: '/', name: "Home", component:Home},
  {path: '/*', component:NotFound}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
