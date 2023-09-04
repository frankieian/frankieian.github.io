import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InProgressViewVue from '@/views/InProgressView.vue'
import NotFound from "@/views/NotFoundView.vue"

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    icon: 'pi pi-home'
  },
  {
    path: '/test',
    name: 'test',
    component: InProgressViewVue,
    icon: 'pi pi-home'
  },
  {
    path: '/other',
    name: 'other',
    component: InProgressViewVue,
    icon: 'pi pi-home'
  },
  {
    path: '/contact',
    name: 'contact',
    component: InProgressViewVue,
    icon: 'pi pi-home'
  },
  {
    path:'/:pathMatch(.*)*', name: 'not-found', component: NotFound 
  }

]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
