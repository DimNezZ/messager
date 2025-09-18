<template>
  <div class="message_list_wrapper">
    <MessageBar v-for="msg in messages" :key="msg.id" :message="msg"></MessageBar>
  </div>
</template>

<script setup>
import { useMessageStore } from '@/stores/messages'
import MessageBar from './MessageBar.vue'
import { useChatsStore } from '@/stores/chats'
import { computed } from 'vue'

const messageStore = useMessageStore()
const chatsStore = useChatsStore()

const messages = computed(() => {
  const chatId = chatsStore.activeChatId
  if (chatId) {
    return messageStore.getMessageByChat(chatId)
  } else {
    return []
  }
})
</script>

<style scoped>
.message_list_wrapper {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: var(--small-border);
  border-radius: var(--border-radius-m);
  background-color: #f8f8f8;
  padding: 20px 10px;
}
</style>
<!-- Component for wrapping all messages from the selected chat. Renders instances of the MessageBar component -->
