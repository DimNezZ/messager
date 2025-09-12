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

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
