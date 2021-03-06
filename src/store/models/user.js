import { getUserInfo } from '../../services/index'

export default {
  state: {
    inited: false
  },
  reducers: {
    updateUserInfo(state, payload) {
      return {
        ...state,
        ...payload
      }
    },
    logout() {
      return {
        inited: true
      }
    }
  },
  effects: () => ({
    async login(_, { user }) {
      const res = await getUserInfo()
      console.log(111, user, res)
    }
  })
}