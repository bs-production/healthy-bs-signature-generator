// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import inputInformation from './components/input-information.vue'
import outputSignature from './components/output-signature.vue'
import router from './router'
import VModal from 'vue-js-modal'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.use(VModal)

Vue.config.productionTip = false

Vue.component('inputInformation', inputInformation)
Vue.component('outputSignature', outputSignature)

// export const bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
