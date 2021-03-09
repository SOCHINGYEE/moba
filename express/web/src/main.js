import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/scss/style.scss'
import router from './router'
import './assets/iconfont/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (<= Swiper 5.x) swiper版本小于等于5.x时引用
import 'swiper/dist/css/swiper.css';
import Card from './components/Card.vue'
import ListCard from './components/ListCard.vue'

Vue.component('m-card',Card)
Vue.component('m-list-card',ListCard)
 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL:process.env.VUE_APP_API_URL || '/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
