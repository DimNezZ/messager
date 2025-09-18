<template>
  <button
    class="button"
    :class="{ exclusion_button: variant === 'exclusion' }"
    :type="type"
    @click="emit('click', $event)"
  >
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
  variant: {
    type: String,
    default: 'default',
  },
})
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: var(--border-radius-s);
  border: var(--small-border);
  background-color: #fff;
  transition: 0.3s;
  font-family: 16px;
  font-weight: 700;
  color: var(--main-color);
}

.button:hover {
  background-color: var(--main-color);
  color: #fff;
}

.button:active {
  border-color: var(--second-color);
  background-color: var(--second-color);
}
.exclusion_button {
  padding: 2px;
  width: 17px;
  height: 17px;
  font-size: 15px;
}
</style>
<!-- Button component with the ability to configure the required functionality -->
