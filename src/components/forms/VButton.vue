<template>
  <button class="v-button">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import getPropType from '@/composables/getPropType'

defineProps({
  disabled: getPropType('boolean')
})
</script>
<style scoped>
.v-button {
  margin-top: 1rem;
  background: #7f56d9;
  padding: 10px 18px;
  border: 1px solid #7f56d9;
  box-sizing: border-box;
  color: #fff;
  font-weight: 500;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 1rem;
  font-size: 1rem;
  cursor: pointer;
}
.v-button:focus {
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
}
.v-button:hover {
  background-color: #6941c6;
}
</style>
