<template>
  <div class="user_card">
    <div class="user_logo">{{ firstLetter }}</div>
    <div class="user_name">{{ user.name }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const firstLetter = computed(() => props.user.login[0]?.toUpperCase())
</script>

<style scoped>
.user_card {
  border: 2px solid var(--main-color);
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  transition: 0.3s;
}
.user_card:hover {
  border-color: var(--second-color);
}
.user_logo {
  width: 24px;
  display: flex;
  justify-content: center;
  background-color: var(--main-color);
  border-radius: 50%;
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
</style>
