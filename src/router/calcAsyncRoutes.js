import Home from '@/layout/Home'
import _import from './import'

function initRoutesChildren (routes) {
  let childrenRoutes = []
  routes.forEach(route => {
    let routeItem = {
      component: _import('components/Transfer')
    }
    if(route.children && route.children.length > 0) {
      routeItem.children = initRoutesChildren(route.children)
    }
    childrenRoutes.push(Object.assign({}, route, routeItem))
  })
  return childrenRoutes
}

// 将后台传过来的routes解析为前端的路由信息
export default function initRoutes (routes) {
  let asyncRoute = []
  routes.forEach(route => {
    // 路由项的模板
    let routeItem = {
      component: Home
    }
    if (route.children && route.children.length > 0) {
      routeItem.children = initRoutesChildren(route.children)
    }
    asyncRoute.push(Object.assign({}, route, routeItem))
  })
  return asyncRoute
}