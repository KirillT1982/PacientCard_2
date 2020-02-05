import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import PortalVue from 'portal-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(PortalVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
