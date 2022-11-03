import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Cart = () => import('../views/cart/cart.vue')
const Profile = () => import('../views/profile/profile.vue')
const Detail = () => import('../views/detail/Detail.vue')

const routes = [
  {
    path: '',
    redirect: '/home',
    meta:{
      keepAlive: true //是否缓存
    }
  },
  {
    path: '/home',
    component: Home,
    meta:{
      keepAlive: true //是否缓存
    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      keepAlive: false //是否缓存
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta:{
      keepAlive: false //是否缓存
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      keepAlive: false //是否缓存
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail,
    meta: {
      keepAlive: true
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
