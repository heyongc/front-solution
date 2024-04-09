import { createStore } from 'vuex'
import getters from './getters'
import category from './modules/category'

import createdPersistedState from 'vuex-persistedstate'

const store = createStore({
  getters,
  modules: {
    category
  },
  plugins: [
    createdPersistedState({
      // 保存到 localStorage 中的 key
      key: 'imooc-front',
      paths: ['category']
    })
  ]
})

export default store
