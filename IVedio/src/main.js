// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Toast } from 'vux'
import { XHeader } from 'vux'
import { Search } from 'vux'
import { Tab, TabItem } from 'vux'

Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('search', Search)
Vue.component('x-header', XHeader)
Vue.component('toast', Toast)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
