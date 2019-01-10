import axios from 'axios'

export const endpoint = 'https:www.your-endpoint.com'

export default axios.create({
  baseURL: `${endpoint}`
})
