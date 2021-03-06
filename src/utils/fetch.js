import axios from 'axios'
import _ from 'lodash'

axios.defaults.withCredentials = true

axios.interceptors.request.use(
  function (config) {
    // 设置统一的请求头
    const username = getCookie('username')
    if (username) {
      config.headers['X-EIGEN-USERNAME'] = window.atob(username)
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export const getTrendList = function (params) {
  return axios({
    url: `http://api.xyzhimo.xyz/proposal/page`,
    method: 'post',
    data: params
  })
}
