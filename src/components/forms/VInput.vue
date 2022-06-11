<template>
  <input
    class="input"
    type="text"
    :placeholder="placeholder"
    @input="updateValue"
    :value="modelValue"
    :disabled="disabled"
  />
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { useInputProps } from '@/composables/useInput'

const emit = defineEmits(['update:modelValue'])
defineProps({ ...useInputProps() })

const updateValue = (event: Event) => {
  const { target } = event
  if (target) emit('update:modelValue', (target as HTMLInputElement).value)
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  outline: none;
  margin-top: 1rem;
}

.input:focus {
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
}
.input:hover {
  border: 1px solid #694df9;
  border-radius: 4px;
}
</style>
