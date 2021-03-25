import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layout/home')
    }
  ]
})

export default router