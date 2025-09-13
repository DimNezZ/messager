<template>
  <div class="list_wrapper">
    <div class="title">{{ title }}</div>
    <div v-if="chatList.length" class="chats">
      <ChatBar v-for="chat in chatList" :key="chat.id" :chat="chat"></ChatBar>
    </div>
    <div v-else class="empty">Нет чатов</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ChatBar from './ChatBar.vue'
import { useChatsStore } from '@/stores/chats'

const chatsStore = useChatsStore()

const chatList = computed(() => {
  if (props.type === 'mine') return chatsStore.getMyChats()
  if (props.type === 'others') return chatsStore.getOtherChats()
  return chatsStore.getAllChats()
})

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.list_wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.title {
  text-align: center;
  font-size: 18px;
  font-weight: 700;
}
.chats {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 200px;
  padding: 10px 20px;
  border: 3px solid var(--main-color);
  border-radius: 10px;
  overflow-y: scroll;
  transition: 0.3s;
}
.chats:hover {
  border-color: var(--second-color);
}
</style>
