import { createRouter, createWebHistory } from 'vue-router'

import TheLanding from '@/views/TheLanding.vue'
import TheLandingHome from '@/pages/landing/TheLandingHome.vue'
import TheAuth from '@/views/TheAuth.vue'
import TheRegister from '@/pages/auth/TheRegister.vue'
import TheLogin from '@/pages/auth/TheLogin.vue'
import TheForgot from '@/pages/auth/TheForgot.vue'
import ThePanel from '@/views/ThePanel.vue'
import TheSingle from '@/views/TheSingle.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheLanding',
      component: TheLanding,
      children: [
        {
          path: '/',
          name: 'TheLandingHome',
          component: TheLandingHome,
        },
      ]
    },
    {
      path: '/auth',
      name: 'Auth',
      component: TheAuth,
      children: [
        {
          path: '/auth/login',
          name: 'TheLogin',
          component: TheLogin,
        },
        {
          path: '/auth/register',
          name: 'TheRegister',
          component: TheRegister
        },
        {
          path: '/auth/forgot',
          name: 'TheForgot',
          component: TheForgot
        },
      ]
    },
    {
      path: '/panel/:userId',
      name: 'ThePanel',
      component: ThePanel
    },
    {
      path: '/panel/:id/:cvId',
      name: 'TheSingle',
      component: TheSingle
    },


  ]
})

export default router
