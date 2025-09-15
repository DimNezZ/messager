import { defineStore } from 'pinia'
import { useCurrentUserStore } from './user'

export const useChatsStore = defineStore('chats', {
  state: () => ({
    chatList: [],
    nextId: 1,
    activeChatId: null,
  }),

  getters: {
    activeChat: (state) => state.chatList.find((c) => c.id === state.activeChatId),
  },

  actions: {
    createChat() {
      const currentUserStore = useCurrentUserStore()
      const login = currentUserStore.user?.login

      const newChat = {
        id: this.nextId++,
        author: login,
        members: [login],
      }

      this.chatList.push(newChat)
    },
    setActiveChat(chatId) {
      this.activeChatId = chatId
    },
    dropChat(chatId) {
      this.chatList = this.chatList.filter((c) => c.id !== chatId)
    },

    joinChat(chatId, userLogin) {
      const chat = this.chatList.find((c) => c.id === chatId)
      if (chat && !chat.members.includes(userLogin)) {
        chat.members.push(userLogin)
      }
    },
    leaveChat(chatId, userName) {
      const chat = this.chatList.find((c) => c.id === chatId)
      if (chat) {
        chat.members = chat.members.filter((m) => m !== userName)
      }
    },
    kickMember(chatId, userLogin) {
      const currentUserStore = useCurrentUserStore()
      const currentLogin = currentUserStore.user?.login
      const chat = this.chatList.find((c) => c.id === chatId)
      if (chat && chat.author === currentLogin && chat.author !== userLogin) {
        chat.members = chat.members.filter((m) => m !== userLogin)
      }
    },
    clearActiveChat() {
      this.activeChatId = null
    },
    getMyChats() {
      const currentUser = useCurrentUserStore()
      return this.chatList.filter((c) => c.author === currentUser.user?.login)
    },
    getOtherChats() {
      const currentUser = useCurrentUserStore()
      return this.chatList.filter((c) => c.author !== currentUser.user?.login)
    },
  },

  persist: true,
})
