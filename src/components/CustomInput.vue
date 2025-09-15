<template>
  <div class="form_input">
    <label v-if="label" for="id" class="label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input"
    />
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.form_input {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.label {
  font-size: 18px;
  font-weight: 700;
  color: var(--main-color);
}

.input {
  padding: 3px 5px;
  border-radius: var(--border-radius-s);
  border: var(--small-border);
  font-size: 14px;
}

.input:focus {
  outline: none;
  border-color: var(--second-color);
}
</style>
