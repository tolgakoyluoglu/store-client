import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://0.0.0.0:4000/api'

export default axios
