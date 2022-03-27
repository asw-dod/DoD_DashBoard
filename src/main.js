import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './css/style.css'
import VAnimateCss from 'v-animate-css';


Vue.config.productionTip = false

Vue.use(VAnimateCss);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
