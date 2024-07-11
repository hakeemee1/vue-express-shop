import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
{
    path: '',
    name: 'navbar',
    component: () => import(/* webpackChunkName: "home" */ '../views/NavBar.vue'),
    children: [

      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
      },
      {
        path: '/apical',
        name: 'apical',
        component: () => import(/* webpackChunkName: "home" */ '../views/ApiCal.vue')
      },
      {
        path: '/apicon',
        name: 'apican',
        component: () => import(/* webpackChunkName: "home" */ '../views/Apicon.vue')
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductsManage.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetailView.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
