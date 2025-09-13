<template>
  <div class="bar_wrapper">
    <div class="title">Канал пользователя "{{ chat.author }}"</div>

    <CustomButton v-if="currentUser.user?.name !== chat.author && !isMember" @click.stop="joinChat">
      +
    </CustomButton>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCurrentUserStore } from '@/stores/user'
import CustomButton from './CustomButton.vue'
import { useChatsStore } from '@/stores/chats'

const props = defineProps({
  chat: {
    type: Object,
    required: true,
  },
})

const currentUser = useCurrentUserStore()
const chatsStore = useChatsStore()
const isMember = computed(() => props.chat.members.includes(currentUser.user?.name))

function joinChat() {
  chatsStore.joinChat(props.chat.id, currentUser.user?.name)
}
</script>

<style scoped>
.bar_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 16px;
}
</style>
