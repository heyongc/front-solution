import { loginUser } from '@/api/sys'
import md5 from 'md5'

export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {
    /**
     * 保存 token
     */
    setToken(state, newToken) {
      state.token = newToken
    }
  },
  actions: {
    /**
     * 登录
     */
    async login(context, payload) {
      const { password } = payload
      const data = await loginUser({
        ...payload,
        password: password ? md5(password) : ''
      })

      context.commit('setToken', data.token)
    }
  }
}
