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

const chatsStore = useChatsStore()

function createChat() {
  chatsStore.createChat()
}
</script>

<style scoped>
.area_wrapper {
  height: 100vh;
  width: 400px;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.my_chats {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
</style>
