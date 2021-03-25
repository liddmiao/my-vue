import axios from 'axios'

const service = axios.create({
  baseURL: window.location.origin + '/isv',
  timeout: 30 * 60 * 1000,
})

service.interceptors.request.use(
  config => {
    // 发送请求前检查重复请求
  },
  config => {
    
  }
)

service.interceptors.response.use(
  config => {
    // 发送请求前检查重复请求
  },
  config => {
    
  }
)

export default service
