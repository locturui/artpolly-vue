import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassesView from '../views/ClassesView.vue'
import ShopView from '../views/ShopView.vue'
import OfferingView from '../views/OfferingView.vue'
import ScheduleView from '../views/ScheduleView.vue'

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
    },
    {
      path: '/offering',
      name: 'offering',
      component: OfferingView
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView
    }
  ]
})

export default router
