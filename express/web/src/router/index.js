import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children:[
      {path:'/',name:'home',component:Home},
      {path:'/articles/:id',name:'article',component:() => import('../views/Article.vue'),props:true}
    ]
  },
  {
    path:'/heroes/:id', name:'hero',component:() => import('../views/Hero.vue'),props:true
  },

  
]

const router = new VueRouter({
  routes
})

export default router
