import * as userServices from '../services/index'

export default {
  namespace: 'user',
  state: {
    userInfo: null
  },
  effects: {
    async getUserInfo ({ callback }) {
      const res = await userServices.getUserInfo()
    }
  },
  reducers: {
    setUserInfo (state, payload) {
      return { ...state, ...payload }
    }
  }
}