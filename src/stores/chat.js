import { defineStore } from 'pinia'
import { useCurrentUserStore } from './user'

// Storage for working with one specific chat
export const useChatStore = defineStore('chat', {
  state: () => ({
    id: null,
    author: null,
    members: [],
  }),
  actions: {
    // Method for checking whether an active user is a participant
    isMember(userName = null) {
      const currentUserStore = useCurrentUserStore()
      const nameToCheck = userName || currentUserStore.user?.name
      return this.members.includes(nameToCheck)
    },
  },
})
