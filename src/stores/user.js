import { defineStore } from 'pinia'

export const useCurrentUserStore = defineStore('currentUser', {
  state: () => {
    return { user: null, isAuthenticated: false, redirectPath: null }
  },
  actions: {
    login(userData) {
      if (!userData) {
        throw new Error('Нет данных')
      }
      this.user = userData
      this.isAuthenticated = true
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
      this.redirectPath = null
    },
    setRedirectPath(path) {
      this.redirectPath = path
    },
  },
  persist: true,
})
