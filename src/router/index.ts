import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = ()=>import('../views/home.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 {
   path:'/home',
   component: ()=>import('../views/home.vue')
 },
 {
   path:'/category',
   component: ()=>import('../views/category.vue')
 },
 {
   path:'/cart',
   component: ()=>import('../views/cart.vue')
 },
 {
   path:'/me',
   component: ()=>import('../views/me.vue')
 },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
