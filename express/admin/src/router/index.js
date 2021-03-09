import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import CategoryEdit from "../views/CategoryEdit.vue";
import CategoryList from "../views/CategoryList.vue";
import GoodEdit from "../views/GoodEdit.vue";
import GoodList from "../views/GoodList.vue";
import HeroList from "../views/HeroList.vue";
import HeroEdit from "../views/HeroEdit.vue";
import ArticleList from "../views/ArticleList.vue";
import ArticleEdit from "../views/ArticleEdit.vue";
import AdEdit from "../views/AdEdit.vue";
import AdList from "../views/AdList.vue";
import AdminUserList from "../views/AdminUserList.vue";
import AdminUserEdit from "../views/AdminUserEdit.vue";
import Login from "../views/Login.vue"

Vue.use(VueRouter);


const routes = [
  { path: '/login', name: 'login', component: Login, meta:{isPublic: true}},
  {
    path: "/", 
    name: "main",
    component: Main,
    children: [
      { path: "/categories/create", component: CategoryEdit },
      { path: "/categories/edit/:id", component: CategoryEdit, props: true },
      { path: "/categories/list", component: CategoryList},

      { path: "/goods/create", component: GoodEdit },
      { path: "/goods/edit/:id", component: GoodEdit, props: true},
      { path: "/goods/list", component: GoodList,meta:{
        keepAlive:true
      }},

      { path: "/heroes/create", component: HeroEdit},
      { path: "/heroes/edit/:id", component: HeroEdit, props: true },
      { path: "/heroes/list", component: HeroList,meta:{
        keepAlive:true
      }},

      { path: "/articles/create", component: ArticleEdit },
      { path: "/articles/edit/:id", component: ArticleEdit, props: true},
      { path: "/articles/list", component: ArticleList,meta:{
        keepAlive:true
      }},

      { path: "/ads/create", component: AdEdit },
      { path: "/ads/edit/:id", component: AdEdit, props: true},
      { path: "/ads/list", component: AdList},

      { path: "/adminUsers/create", component: AdminUserEdit },
      { path: "/adminUsers/edit/:id", component: AdminUserEdit, props: true },
      { path: "/adminUsers/list", component: AdminUserList },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to,from,next) => {
  console.log(to.meta) // {} || {isPublic:true}
  if (!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})
export default router;
