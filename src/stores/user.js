import { defineStore } from 'pinia'
import { useChatsStore } from './chats'

//Storage for working with one specific user
export const useCurrentUserStore = defineStore('currentUser', {
  state: () => {
    return { user: null, isAuthenticated: false, redirectPath: null }
  },
  actions: {
    // The user login method verifies that user data has been transmitted
    login(userData) {
      if (!userData) {
        throw new Error('Нет данных')
      }
      this.user = userData
      this.isAuthenticated = true
    },
    // Method for logging the user out of the system resets the user's data
    logout() {
      const chatsStore = useChatsStore()
      chatsStore.clearActiveChat()

      this.user = null
      this.isAuthenticated = false
      this.redirectPath = null
    },
    // Method saves the path to which the user should be redirected after logging in.
    setRedirectPath(path) {
      this.redirectPath = path
    },
  },
  persist: true,
})
