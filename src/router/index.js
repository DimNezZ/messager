import { createRouter, createWebHistory } from 'vue-router'
import AuthorizationForm from '@/components/AuthorizationForm.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'
import MessagerPage from '@/pages/MessagerPage.vue'
import { useCurrentUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/auth', component: AuthorizationForm },
    { path: '/reg', component: RegistrationForm },
    { path: '/', component: MessagerPage, meta: { requiresAuth: true } },
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useCurrentUserStore()
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    userStore.setRedirectPath(to.fullPath)
    next('/auth')
  } else if (!to.meta.requiresAuth && userStore.isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
