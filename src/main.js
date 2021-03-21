import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload' 

import Toast from 'components/common/toast'

Vue.config.productionTip = false

// 添加事件总线
Vue.prototype.$bus = new Vue()
// 安装toast
Vue.use(Toast)

// 解决移动端300毫秒延迟问题
FastClick.attach(document.body)

//图片未加载出来时，设置占位图
Vue.use(VueLazyLoad,{
  loading:require('assets/image/common/placeholder.png')
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
