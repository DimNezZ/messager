<template>
  <div class="bar_wrapper" :class="{ active: isActive }" @click="setActive">
    <div class="title">Канал пользователя "{{ chat.author }}"</div>

    <CustomButton
      v-if="currentUser.user?.login !== chat.author && !isMember"
      @click.stop="joinChat"
    >
      +
    </CustomButton>
    <CustomButton v-if="currentUser.user?.login === chat.author" @click.stop="dropChat">
      ×
    </CustomButton>
    <CustomButton
      v-if="isMember && currentUser.user?.login !== chat.author"
      @click.stop="leaveChat"
    >
      –
    </CustomButton>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCurrentUserStore } from '@/stores/user'
import { useChatsStore } from '@/stores/chats'
import CustomButton from './CustomButton.vue'

const props = defineProps({
  chat: {
    type: Object,
    required: true,
  },
})

const currentUser = useCurrentUserStore()
const chatsStore = useChatsStore()
const isMember = computed(() => props.chat.members.includes(currentUser.user?.login))
const isActive = computed(() => chatsStore.activeChatId === props.chat.id)

function joinChat() {
  chatsStore.joinChat(props.chat.id, currentUser.user?.login)
}
function dropChat() {
  chatsStore.dropChat(props.chat.id)
}
function leaveChat() {
  chatsStore.leaveChat(props.chat.id, currentUser.user?.login)
}
function setActive() {
  chatsStore.setActiveChat(props.chat.id)
}
</script>

<style scoped>
.bar_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 5px 10px;
  border-radius: var(--border-radius-m);
  background-color: rgba(0, 0, 0, 0.1);
}

.bar_wrapper:active {
  background-color: rgba(0, 0, 0, 0.3);
}

.title {
  font-size: 16px;
}
</style>
