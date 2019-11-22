import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Element from 'element-ui'
import 'font-awesome/css/font-awesome.css'
 import axios from 'axios'

// import {request} from './network/request'

Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  store,
   axios,
  render: h => h(App)
}).$mount('#app')

//基本axios请求
// axios({
//   url:'/json/homedata.json'
// }).then(res => {
//   console.log(res)
// })
// axios.get('/json/homedata.json').then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
