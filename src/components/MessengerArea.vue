<template>
  <div class="messager_wrapper"></div>
  <CustomInput></CustomInput>
  <CustomButton>Отправить ↵</CustomButton>
</template>

<script setup>
import CustomButton from './CustomButton.vue'
import CustomInput from './CustomInput.vue'
</script>

<style scoped>
.messager_wrapper {
  height: 100%;
  border: var(--small-border);
  border-radius: var(--border-radius-m);
  background-color: #f8f8f8;
}
</style>
