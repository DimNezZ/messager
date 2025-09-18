import { defineStore } from 'pinia'

// Storage for working with messages
export const useMessageStore = defineStore('message', {
  state: () => ({
    messages: [],
    nextId: 1,
  }),
  getters: {
    // Method for receiving messages in the selected chat
    getMessageByChat: (state) => {
      return (chatId) => state.messages.filter((m) => m.chatId === chatId)
    },
  },
  actions: {
    // Method for sending a message from a specific author to a specific chat
    sendMessage(chatId, text, author) {
      this.messages.push({
        id: this.nextId++,
        chatId,
        author,
        text,
        timestamp: new Date().toISOString(),
      })
    },
  },
  persist: true,
})
