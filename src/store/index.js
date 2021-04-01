import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules/index'
import getters from './getter'

console.log(modules)

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  modules
})

export default store