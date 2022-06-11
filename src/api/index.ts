import axios from 'axios'
const { VUE_APP_API_URL } = process.env

axios.defaults.withCredentials = true
axios.defaults.baseURL = VUE_APP_API_URL || 'http://0.0.0.0:4000/api'

export default axios
