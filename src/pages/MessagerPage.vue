<template>
  <div class="layout">
    <div class="sidebar">
      <ChatsArea />
    </div>

    <div class="main">
      <MessengerArea></MessengerArea>
    </div>

    <div class="sidebar">
      <UserArea />
    </div>
  </div>
</template>

<script setup>
import ChatsArea from '@/components/ChatsArea.vue'
import MessengerArea from '@/components/MessengerArea.vue'
import UserArea from '@/components/UserArea.vue'
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 450px 1fr 450px;
  height: 100vh;
  width: 100%;
}

.sidebar {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #f8f8f8;
}

.main {
  padding: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #ddd;
  border-left: 2px solid #ddd;
  flex: 1;
  min-height: 0;
}
</style>
