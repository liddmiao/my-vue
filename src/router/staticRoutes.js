import Home from '@/layout/Home'
import _import from './import'

export default [
  {
    path: '/',
    name: 'home',
    redirect: 'home',
    component: Home,
    children: [
      {
        path: 'home',
        component: _import('homePage/CardIndex')
      },
      {
        path: 'home/:viewId',
        name: 'home_viewId',
        component: _import('transfer/TransferIndex')
      }
    ]
  }
]