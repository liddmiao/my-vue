import Vue from 'vue'
import Router from 'vue-router'
import staticRoutes from './staticRoutes'

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {console.log(err)})
}

Vue.use(Router)

// 页面打开的时候，根据location生成对应的路由信息，否则刷新会白屏
const hash = window.location.hash.replace('#/', '').split('/')

const router = new Router({
  routes: [...staticRoutes]
})

export default router