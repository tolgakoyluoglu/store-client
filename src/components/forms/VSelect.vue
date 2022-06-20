<template>
  <div class="v-select d-flex" @click="open = !open" tabindex="0" @blur="open = false">
    <span class="text" v-if="selectedOption">
      {{ selectedOption }}
    </span>
    <span v-else class="text placeholder"> {{ placeholder }}</span>
    <div class="options" v-if="open">
      <div
        v-for="(option, i) in filteredOptions"
        :key="i"
        @click="selectOption(option)"
        @change="handleChange(option)"
        class="option"
        :class="{ current: option.name ? option.name === selectedOption : option === selectedOption }"
      >
        {{ option.name || option }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps, computed } from 'vue'

const emit = defineEmits(['input', 'change'])
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Select'
  },
  options: {
    type: Object || String || Array || Number,
    required: true
  },
  /* Replace the key for the display name if options is an object */
  name: {
    type: String
  }
})

const open = ref<boolean>(false)
const selectedOption = ref<string | object>('')

const filteredOptions = computed(() => {
  let filteredArray
  if (props.name) {
    let tempObject = {}
    // eslint-disable-next-line
    filteredArray = props.options.map((option: any) => {
      const key = props.name || ''
      tempObject = { name: option[key], ...option }
      return tempObject
    })
  } else {
    filteredArray = props.options
  }
  return filteredArray
})

function selectOption(option: { name: string }) {
  selectedOption.value = option.name ? option.name : option
  emit('input', option)
}
function handleChange(option: string) {
  emit('change', option)
}
</script>

<style scoped>
.v-select {
  margin-top: 16px;
  max-width: 100%;
  position: relative;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  align-items: center;
  background: #ffffff;
  cursor: pointer;
  font-size: 0.875rem;
  box-sizing: border-box;
  border: 1px solid #d0d5dd;
}
.text {
  padding: 10px 12px;
  width: 100%;
  height: 20px;
  text-align: left;
}
.placeholder {
  color: #757575;
}
.v-select:hover {
  border: 1px solid #694df9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
}
.v-select:focus {
  border: 1px solid #e2dcff;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff;
}
.options {
  position: absolute;
  height: 125px;
  width: 100%;
  overflow: auto;
  margin-top: 180px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: left;
}
.current {
  background: #f7f5ff;
  color: #5e47d2;
}
.option {
  padding: 12px;
}
.option:hover {
  background: #f5f5f5;
}
::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
</style>
