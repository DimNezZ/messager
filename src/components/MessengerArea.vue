<template>
  <div v-if="chatsStore.activeChatId" class="messenger_area_wrapper">
    <MessageList></MessageList>
    <CustomInput v-model="text"></CustomInput>
    <CustomButton @click="send">Отправить ↵</CustomButton>
  </div>
  <div v-else class="empty">Выберите чат</div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useMessageStore } from '@/stores/messages'
import { useChatsStore } from '@/stores/chats'
import { useCurrentUserStore } from '@/stores/user'
import CustomButton from './CustomButton.vue'
import CustomInput from './CustomInput.vue'
import MessageList from './MessageList.vue'

const messageStore = useMessageStore()
const chatsStore = useChatsStore()
const currentUser = useCurrentUserStore()
const isMember = computed(() => {
  const activeChat = chatsStore.activeChat
  return activeChat?.members.includes(currentUser.user?.login)
})
const text = ref('')

function send() {
  if (!text.value.trim() || !chatsStore.activeChatId || !isMember.value) {
    return
  }
  messageStore.sendMessage(chatsStore.activeChatId, text.value.trim(), currentUser.user?.login)
  text.value = ''
}
</script>

<style scoped>
.messenger_area_wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-height: 0;
}
</style>
