import { watch } from 'vue'
import router from '@/router'

export function setupStoreRedirects(store) {
  watch(
    () => store.isAuthenticated,
    (isAuthenticated) => {
      if (isAuthenticated) {
        router.push(store.redirectPath || '/')
      } else {
        router.push('/auth')
      }
    },
  )
}
