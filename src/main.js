// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import FastClick from 'fastclick'
import App from './App.vue'
Vue.use(VueRouter)
import './util/flexible.debug'
import './util/flexible_css.debug'
import './style/common.styl'


if('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false