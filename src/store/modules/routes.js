import staticRoutes from '@/router/staticRoutes'
import Vue from 'vue'

const namespaced = true

const state = {
  routeList: []
}

const mutations = {
  setRoute (state, routeList) {
    state.routeList = staticRoutes.concat(routeList)
  }
}

export default {
  namespaced,
  state,
  mutations
}