<template>
  <div class="column">
    <ChatsArea></ChatsArea>
    <div>
      <div>Пользователь под именем {{ currentUser.user?.name }}</div>
      <CustomButton @click="currentUser.logout">Выход</CustomButton>
    </div>
  </div>
</template>

<script setup>
import ChatsArea from '@/components/ChatsArea.vue'
import CustomButton from '@/components/CustomButton.vue'
import { useCurrentUserStore } from '@/stores/user'

const currentUser = useCurrentUserStore()
</script>

<style scoped>
.column {
  display: flex;
}
</style>
