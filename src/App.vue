<template>
  <RouterView></RouterView>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCurrentUserStore } from '@/stores/user'
import { setupStoreRedirects } from '@/utils/redirectHandler'

const userStore = useCurrentUserStore()

onMounted(() => {
  setupStoreRedirects(userStore)
})
</script>

<style scoped></style>
