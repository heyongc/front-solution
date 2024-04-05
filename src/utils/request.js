import axios from 'axios'

const service = axios.create({
  // baseURL: 'https://api.imooc-front.lgdsunday.club/api',

  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

service.interceptors.request.use((config) => {
  config.headers.icode = 'helloqianduanxunlianying'
  return config
})

console.log('【import.meta.env.VITE_BASE_API】', import.meta.env.VITE_BASE_API)

export default service
