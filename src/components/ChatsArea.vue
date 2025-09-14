<template>
  <div class="area_wrapper">
    <div class="my_chats">
      <CustomButton @click="createChat">Создать чат</CustomButton>
      <ChatsList title="Мои чаты" type="mine"></ChatsList>
    </div>
    <ChatsList title="Все чаты" type="others"></ChatsList>
  </div>
</template>

<script setup>
import ChatsList from '@/components/ChatsList.vue'
import { useChatsStore } from '@/stores/chats'
import CustomButton from './CustomButton.vue'
import { useCurrentUserStore } from '@/stores/user'

const chatsStore = useChatsStore()
const currentUser = useCurrentUserStore()

function createChat() {
  chatsStore.createChat(currentUser.user?.name)
}
</script>

<style scoped>
.area_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 60px;
}

.my_chats {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
</style>
