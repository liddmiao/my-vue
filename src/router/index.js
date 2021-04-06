import Vue from 'vue'
import Router from 'vue-router'
import staticRoutes from './staticRoutes'

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)


const router = new Router({
  routes: [...staticRoutes]
})

export default router