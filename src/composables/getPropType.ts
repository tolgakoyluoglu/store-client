export default function getPropType(
  propType: string,
  defaultValue?: Array<string | number | object> | object | string | number | boolean | File
) {
  switch (propType) {
    case 'object':
      return {
        type: Object,
        default() {
          return defaultValue === undefined ? {} : defaultValue
        }
      }
    case 'array':
      return {
        type: Array,
        default() {
          return defaultValue === undefined ? [] : defaultValue
        }
      }
    case 'number':
      return {
        type: Number,
        default() {
          return defaultValue === undefined ? 50 : defaultValue
        }
      }
    case 'string':
      return {
        type: String,
        default() {
          return defaultValue === undefined ? '' : defaultValue
        }
      }
    case 'boolean':
      return {
        type: Boolean,
        default() {
          return defaultValue === undefined ? false : defaultValue
        }
      }
    case 'file':
      return {
        type: File
      }
    default:
      console.log('invalid proptype')
      return {}
  }
}
