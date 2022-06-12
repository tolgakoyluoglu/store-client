<template>
  <div class="v-select" @click="open = !open" tabindex="0" @blur="open = false">
    <span class="text">
      {{ selectedOption || placeholder }}
    </span>
    <div class="options" v-if="open">
      <div
        v-for="(option, i) in options"
        :key="i"
        @click="selectOption(option)"
        @change="handleChange(option)"
        class="option"
        :class="{ current: option.name === selectedOption }"
      >
        {{ option.name || option }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'

const emit = defineEmits(['input', 'change'])
defineProps({
  placeholder: {
    type: String,
    default: 'Select'
  },
  options: {
    type: Object || String || Array || Number,
    required: true
  }
})
//Todo: Keyboard navigation
// Todo: Computed for options, We can send in a prop e.g my display key name should be from the object property "title",
// we can then override "title" with "name" key instead.
const open = ref<boolean>(false)
const selectedOption = ref<string>('')

const selectOption = (option: any) => {
  selectedOption.value = option || option.name
  emit('input', option)
}
const handleChange = (option: any) => {
  emit('change', option)
}
</script>

<style scoped>
.v-select {
  width: 256px;
  height: 42px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  display: flex;
  border-radius: 4px;
  align-items: center;
  background: #ffffff;
  cursor: pointer;
}
.text {
  padding: 6px 12px;
  width: 212px;
  height: 20px;
  text-align: left;
  color: #757575;
}
.v-select:hover {
  border: 1px solid #694df9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
}
.v-select:focus {
  border: 1px solid #e2dcff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
}
.options {
  position: absolute;
  height: 150px;
  width: 256px;
  margin-right: 30px;
  overflow: auto;
  margin-top: 195px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  text-align: left;
}
.current {
  background: #f7f5ff;
  color: #5e47d2;
}
.option {
  padding: 6px 16px;
}
.option:hover {
  background: #f5f5f5;
}
</style>
