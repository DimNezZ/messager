<template>
  <div class="form_wrapper"><slot></slot></div>
</template>

<script setup>

</script>

<style scoped>
.form_wrapper{
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  min-width: 600px;
  border-radius: 10px;
  border: 3px solid var(--main-color);
}
</style>
