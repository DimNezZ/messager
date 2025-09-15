<template>
  <div class="user_area">
    <div v-if="activeChat" class="user_wrapper">
      <div class="title">
        Участники канала пользователя {{ activeChat.author }} ({{ membersUsers.length }})
      </div>
      <div class="users">
        <UserCard v-for="user in membersUsers" :key="user.login" :user="user"></UserCard>
      </div>
    </div>
    <div v-else class="emtpy">Выберите чат для отображени участников</div>
    <div class="logout">
      <CustomButton @click="currentUser.logout">Выход</CustomButton>
    </div>
  </div>
</template>

<script setup>
import { useUsersStore } from '@/stores/users'
import { useChatsStore } from '@/stores/chats'
import { computed } from 'vue'
import { useCurrentUserStore } from '@/stores/user'
import UserCard from './UserCard.vue'
import CustomButton from './CustomButton.vue'

const chatsStore = useChatsStore()
const usersStore = useUsersStore()
const currentUser = useCurrentUserStore()

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
.user_area {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.user_wrapper {
  display: flex;
  flex-direction: column;
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
  gap: 25px;
}
.emtpy {
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}
.logout {
  align-items: end;
}
</style>
