import { createStore } from 'vuex'
import getters from './getters'
import category from './modules/category'
import theme from './modules/theme'
import app from './modules/app'
import search from './modules/search'

import createdPersistedState from 'vuex-persistedstate'

const store = createStore({
  getters,
  modules: {
    category,
    theme,
    app,
    search
  },
  plugins: [
    createdPersistedState({
      // 保存到 localStorage 中的 key
      key: 'imooc-front',
      paths: ['category', 'theme', 'search']
    })
  ]
})

export default store
