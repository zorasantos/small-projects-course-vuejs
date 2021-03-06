import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as axios from './plugins/axios'

Vue.config.productionTip = false

Vue.filter('currency', value => {
  return parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
})

new Vue({
  router,
  store,
  axios,
  vuetify,
  render: h => h(App)
}).$mount('#app')
