import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入scss
import './assets/css/base.scss'
// 使用移动端插件解决点击延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
