import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'
import service from '@/api/index.js'

Vue.prototype.$http = service

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')