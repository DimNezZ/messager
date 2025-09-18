import { defineStore } from 'pinia'
import { useCurrentUserStore } from './user'

// Storage for working with multiple chats, containing a list of chats and the ID of the current and active chat
export const useChatsStore = defineStore('chats', {
  state: () => ({
    chatList: [],
    nextId: 1,
    activeChatId: null,
  }),

  getters: {
    activeChat: (state) => state.chatList.find((c) => c.id === state.activeChatId),
  },
  // Method for creating a chat with the current user as the author and participant of this chat
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
    // Set current chat as active
    setActiveChat(chatId) {
      this.activeChatId = chatId
    },
    // Deleting a chat from the list of shared chats
    dropChat(chatId) {
      this.chatList = this.chatList.filter((c) => c.id !== chatId)
    },
    // Method for adding a user to a selected chat if that user is not already there
    joinChat(chatId, userLogin) {
      const chat = this.chatList.find((c) => c.id === chatId)
      if (chat && !chat.members.includes(userLogin)) {
        chat.members.push(userLogin)
      }
    },
    // Method for a user to exit a selected chat
    leaveChat(chatId, userName) {
      const chat = this.chatList.find((c) => c.id === chatId)
      if (chat) {
        chat.members = chat.members.filter((m) => m !== userName)
      }
    },
    // Method for removing users other than oneself from a chat by the author
    kickMember(chatId, userLogin) {
      const currentUserStore = useCurrentUserStore()
      const currentLogin = currentUserStore.user?.login
      const chat = this.chatList.find((c) => c.id === chatId)
      if (chat && chat.author === currentLogin && chat.author !== userLogin) {
        chat.members = chat.members.filter((m) => m !== userLogin)
      }
    },
    // Method for resetting the active chat
    clearActiveChat() {
      this.activeChatId = null
    },
    // Method for obtaining author chats
    getMyChats() {
      const currentUser = useCurrentUserStore()
      return this.chatList.filter((c) => c.author === currentUser.user?.login)
    },
    // Method for obtaining the remaining chats
    getOtherChats() {
      const currentUser = useCurrentUserStore()
      return this.chatList.filter((c) => c.author !== currentUser.user?.login)
    },
  },

  persist: true,
})
