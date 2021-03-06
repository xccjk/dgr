import Axios from 'axios'
import { message } from 'antd'

export const ERRDURATION = 2

export const urlPrefix = 'http://api.xyzhimo.xyz'

const request = Axios.create({
  baseURL: urlPrefix,
  withCredentials: true
})

request.interceptors.response.use(
  res => {
    const { data = {} } = res
    return data
  },
  err => {
    console.log(err)
    const { data = {} } = err.response
    const { message: msg = '请求错误' } = data
    message.error(msg, ERRDURATION)
    return Promise.reject(err)
  })
export { request }
