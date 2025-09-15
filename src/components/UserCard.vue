<template>
  <div class="user_card">
    <div class="user_logo">{{ firstLetter }}</div>
    <div class="user_name">{{ user.name }}</div>
    <div class="exclusion">
      <CustomButton
        v-if="
          currentUser.user?.login === chatsStore.activeChat?.author &&
          currentUser.user?.login !== user.login
        "
        @click.stop="kickMember"
        variant="exclusion"
        >×</CustomButton
      >
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import CustomButton from './CustomButton.vue'
import { useChatsStore } from '@/stores/chats'
import { useCurrentUserStore } from '@/stores/user'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const currentUser = useCurrentUserStore()
const chatsStore = useChatsStore()

function kickMember() {
  chatsStore.kickMember(chatsStore.activeChatId, props.user?.login)
}

const firstLetter = computed(() => props.user.login[0]?.toUpperCase())
</script>

<style scoped>
.user_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 70px;
  border: var(--small-border);
  border-radius: var(--border-radius-m);
  padding: 5px;
  gap: 5px;
  transition: 0.3s;
  position: relative;
}
.user_card:hover {
  border-color: var(--second-color);
}
.user_logo {
  width: 24px;
  display: flex;
  justify-content: center;
  background-color: var(--main-color);
  border-radius: var(--border-radius-max);
  color: #fff;
  transition: 0.3s;
}
.user_logo:hover {
  background-color: var(--second-color);
}
.user_name {
  text-align: center;
  font-size: 16px;
}
.exclusion {
  position: absolute;
  top: -2px;
  right: -2px;
}
</style>
