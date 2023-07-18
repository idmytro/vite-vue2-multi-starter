import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoutes from '../pages/home'

Vue.use(VueRouter)

const routes = [
  ...homeRoutes,
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
