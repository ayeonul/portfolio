import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '../views/Intro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Intro
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
