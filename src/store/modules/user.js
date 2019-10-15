import Auth from '@/auth'
import router from '@/router/index'

const user = {
  state: {
    user: {},
    role: [],
    routers: router.options.routes,
    dynamicRouters: []
  },

  mutations: {
    GET_USER: (state) => {
      return state.user
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_ROUTER: (state, routers) => {
      state.routers = state.routers.concat(routers)
      state.dynamicRouters = state.routers
      Auth.setRouters(state.routers)
    },
    SET_DYNAMIC_ROUTER: (state, routers) => {
      state.dynamicRouters = routers
      Auth.setDynamicRouters(state.dynamicRouters)
    }
  },

  actions: {
    getUser: ({ commit }) => {
      commit('GET_USER')
    },
    setUser: ({ commit }, user) => {
      commit('SET_USER', user)
    },
    setRouters: ({ commit }, routers) => {
      commit('SET_ROUTER', routers)
    },
    setDynamicRouters: ({ commit }, routers) => {
      commit('SET_DYNAMIC_ROUTER', routers)
    }
  }
}

export default user
