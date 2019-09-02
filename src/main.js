import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui';
import recruitData from './pages/JoinUs/data.js'
import './assets/css/override-element-ui.css'  //css重写element-ui的样式

import 'lib-flexible'
import 'babel-polyfill'

Vue.prototype.global=recruitData;

Vue.config.productionTip = false

Vue.use(Element);

router.afterEach((to,from,next) => {

  window.scrollTo(0,0);

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
