import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/components/Home')
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: () => import(/* webpackChunkName: "stocks" */ '@/views/Stocks')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Portfolio')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
