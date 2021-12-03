import Vue from 'vue'

import App from './App.vue'
import store from './store'
import router from './routes'

import './plugins'

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
