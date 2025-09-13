import { defineStore } from 'pinia'
import { useCurrentUserStore } from './user'

export const useChatsStore = defineStore('chats', {
  state: () => ({
    chatList: [],
    nextId: 1,
  }),

  actions: {
    createChat() {
      const currentUserStore = useCurrentUserStore()
      const authorName = currentUserStore.user?.name

      const newChat = {
        id: this.nextId++,
        author: authorName,
        members: [authorName],
      }

      this.chatList.push(newChat)
    },
    joinChat(chatId, userName) {
      const chat = this.chatList.find((c) => c.id === chatId)
      if (chat && !chat.members.includes(userName)) {
        chat.members.push(userName)
      }
    },
    getMyChats() {
      const currentUser = useCurrentUserStore()
      return this.chatList.filter((c) => c.author === currentUser.user?.name)
    },
    getOtherChats() {
      const currentUser = useCurrentUserStore()
      return this.chatList.filter((c) => c.author !== currentUser.user?.name)
    },
  },

  persist: true,
})
