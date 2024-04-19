import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassesView from '../views/ClassesView.vue'
import ShopView from '../views/ShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/classes',
      name: 'classes',
      component: ClassesView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    }
  ]
})

export default router
