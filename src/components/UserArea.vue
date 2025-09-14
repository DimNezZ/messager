<template>
  <div v-if="activeChat" class="user_wrapper">
    <div class="title">
      Участники канала пользователя {{ activeChat.author }} ({{ membersUsers.length }})
    </div>
    <div class="users">
      <UserCard v-for="user in membersUsers" :key="user.login" :user="user"></UserCard>
    </div>
  </div>
  <div v-else class="emtpy">Выберите чат для отображени участников</div>
</template>

<script setup>
import { useUsersStore } from '@/stores/users'
import { useChatsStore } from '@/stores/chats'
import { computed } from 'vue'
import UserCard from './UserCard.vue'

const chatsStore = useChatsStore()
const usersStore = useUsersStore()

const activeChat = computed(() => chatsStore.activeChat)
const membersUsers = computed(() => {
  if (activeChat.value) {
    return usersStore.getUsersByLogin(activeChat.value.members)
  } else {
    return []
  }
})
</script>

<style scoped>
.user_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}
.title {
  font-size: 18px;
  font-weight: 700;
}
.users {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.emtpy {
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}
</style>
