import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './css/style.css'
import VAnimateCss from 'v-animate-css';
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use( VAnimateCss)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'
 
Vue.use(VModal)