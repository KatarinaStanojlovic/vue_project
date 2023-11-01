import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/popper.min.js"

import VueRouter from "vue-router"
import CardComp from "./components/Cards.vue"
import LoginComp from "./components/Login.vue"
import RegisterComp from "./components/Register.vue"
import HomeComp from "./components/Home.vue"
import EditCard from "./components/EditCard.vue"
import MoreDetailsComp from "./components/Details.vue"

import store from "./store/store"

export const eventBus = new Vue();

Vue.config.productionTip = false

const routes =[
  {path: "/cards", component:CardComp},
  {path: "/login", component:LoginComp},
  {path: "/home", component:HomeComp},
  {path: "/register", component:RegisterComp},
  { name: 'edit', path: '/edits/:name', component: EditCard },
  { name: 'details', path: '/details/:name', component: MoreDetailsComp },
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
