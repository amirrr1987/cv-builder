import { createRouter, createWebHistory } from 'vue-router'

import TheLandingVue from '@/views/TheLanding.vue'
import TheAuth from '@/views/TheAuth.vue'
import TheRegister from '@/components/auth/TheRegister.vue'
import TheLogin from '@/components/auth/TheLogin.vue'
import TheForgot from '@/components/auth/TheForgot.vue'
import ThePanel from '@/views/ThePanel.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheLandingVue',
      component: TheLandingVue
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
      path: '/panel/:personalId',
      name: 'ThePanel',
      component: ThePanel
    },


  ]
})

export default router
