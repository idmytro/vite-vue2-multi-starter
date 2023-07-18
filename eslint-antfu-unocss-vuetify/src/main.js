import './style.css'

import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable-next-line no-new */
new Vue({
  vuetify,
  el: '#app',
  render: h => h(App),
})
