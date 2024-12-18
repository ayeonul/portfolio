import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '../views/Intro.vue'
import Introduce from '../views/Introduce.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Intro
  },
  {
    path: '/intro',
    name: 'introduce',
    component: Introduce
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
