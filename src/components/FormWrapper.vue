<template>
  <div class="form_wrapper"><slot></slot></div>
</template>

<script setup></script>

<style scoped>
.form_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 600px;
  border-radius: var(--border-radius-m);
  border: var(--medium-border);
}
</style>
<!-- Wrapper for forms, used for authorization and registration forms       -->
