import Vue from 'vue'
import VueRouter from 'vue-router'
import PiggyBank from '@/views/PiggyBank'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PiggyBank',
    component: PiggyBank
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
