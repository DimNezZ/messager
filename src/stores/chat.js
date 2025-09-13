import { defineStore } from 'pinia'
import { useCurrentUserStore } from './user'

export const useChatStore = defineStore('chat', {
  state: () => ({
    id: null,
    author: null,
    membets: [],
  }),
  actions: {
    addMember(userName) {
      if (!this.members.includes(userName)) {
        this.members.push(userName)
      }
    },
    isMember(userName = null) {
      const currentUserStore = useCurrentUserStore()
      const nameToCheck = userName || currentUserStore.user?.name
      return this.members.includes(nameToCheck)
    },
  },
})
