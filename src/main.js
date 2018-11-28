// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(VueDirectiveImagePreviewer, {
  background: {color: '#000'},
  animate: {
    duration: 600,
    delay: 500
  },
  loading: {
    image: ''
  },
  cursor: 'crosshair',
  clickMethod: 'doubleClick'
})
Vue.use(ElementUI)
Vue.config.productionTip = false

const apiClient = axios.create()
// 增加请求拦截
apiClient.interceptors.request.use(config => {
  if (localStorage.getItem('TOKEN')) {
    config.headers['Authorization'] = localStorage.getItem('TOKEN')
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// 增加响应拦截
apiClient.interceptors.response.use(res => {
  return Promise.resolve(res.data)
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

Vue.prototype.http = apiClient

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
