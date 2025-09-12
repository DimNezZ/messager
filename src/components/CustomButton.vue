<template>
  <button class="button" :type="type" @click="emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['click'])

defineProps({
  type: {
    type: String,
    default: 'button',
  },
})
</script>

<style scoped>
.button {
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: #fff;
  transition: 0.3s;
  font-family: 16px;
  font-weight: 700;
  color: var(--main-color);
}
.button:hover{
  background-color: var(--main-color);
    color: #fff;
}
.button:active {
  border-color: var(--second-color);
  background-color: var(--second-color);
}
</style>
