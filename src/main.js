import Vue from 'vue'
import App from './App.vue'
import Router from './Router/router'
import Store from './Store/store'

Vue.config.productionTip = false

new Vue({
  Router,
  Store,
  render: h => h(App)
}).$mount('#app')
