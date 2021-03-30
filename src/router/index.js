import Vue from 'vue'
import Router from 'vue-router'
import staticRoutes from './staticRoutes'

Vue.use(Router)

const router = new Router({
  routes: [...staticRoutes]
})

export default router