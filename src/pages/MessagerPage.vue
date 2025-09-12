<template>
  <div>
    <div>Мессенджер</div>
    <div>{{ currentUser.user?.name }}</div>
    <CustomButton @click="currentUser.logout">Выход</CustomButton>
  </div>
</template>

<script setup>
import CustomButton from '@/components/CustomButton.vue'
import { useCurrentUserStore } from '@/stores/user'

const currentUser = useCurrentUserStore()
</script>

<style scoped></style>
