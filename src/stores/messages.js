import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  state: () => ({
    messages: [],
    nextId: 1,
  }),
  getters: {
    getMessageByChat: (state) => {
      return (chatId) => state.messages.filter((m) => m.chatId === chatId)
    },
  },
  actions: {
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
