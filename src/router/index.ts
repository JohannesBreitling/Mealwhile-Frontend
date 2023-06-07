import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'

import { tokenService } from '@/token/TokenService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },

    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },

  ]
})

router.beforeEach(async (to, from) => {
  if (tokenService.getToken() == null && (to.name != 'register' && to.name != 'login')) {
    // Login if there is no token
    return { name: 'login' }
  }
});

export default router
