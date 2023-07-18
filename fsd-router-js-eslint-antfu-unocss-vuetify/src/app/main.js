import Vue from 'vue'
import App from './App.vue'
import router from './router'

import vuetify from './vuetify' // path to vuetify export

import './style.css'

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable-next-line no-new */
new Vue({
  router,
  vuetify,
  el: '#app',
  render: h => h(App),
})
