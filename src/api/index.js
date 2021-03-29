import axios from 'axios'
import qs from 'qs'

const service = axios.create({
  baseURL: window.location.origin,
  timeout: 30 * 60 * 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

service.interceptors.request.use(
  config => {
    // post请求需要格式化请求参数
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  config => {
    
  }
)

service.interceptors.response.use(
  config => {
    if (config.data && config.data.code === 200) {
      return config.data.data
    }
    return {}
  },
  config => {
    
  }
)

export default service
