import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '*', // * 为通配符，表示其他路径都显示 404 页面
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
