import { ref } from 'vue'
import getPropType from '@/composables/getPropType'

function useInput() {
  const model = ref('')

  return { model }
}

function useInputProps() {
  return {
    disabled: getPropType('boolean'),
    placeholder: getPropType('string'),
    type: getPropType('string', 'text'),
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: ''
    }
  }
}

export { useInput, useInputProps }
