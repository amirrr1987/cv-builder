import { createRouter, createWebHistory } from 'vue-router'

import TheLandingVue from '@/views/TheLanding.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheLandingVue
    },

  ]
})

export default router
