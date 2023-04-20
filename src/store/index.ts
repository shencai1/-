import { createStore } from 'vuex'
import vuexp from 'vuex-persistedstate'
const store = createStore({
  plugins: [vuexp()],
  state: {
    user: {},
    left: [],
    asidewidth: '250px'
  },
  mutations: {
    user(state, obj) {
      state.user = obj
    },
    left(state, menu) {
      state.left = menu
    },
    ce(state) {
      state.asidewidth = state.asidewidth == '200px' ? '64px' : '200px'
    }
  },
  getters: {},
  actions: {}
})

export default store
