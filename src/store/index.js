import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userStatus: 'guest',
    userProfile: {},
    userPresence: true
  },
  mutations: {
    changeUserStatusMutation(state, payload) {
      state.userStatus = 'loggedIn'
      state.userProfile = payload
    },
    clearUserStatus(state) {
      state.userStatus = "guest";
      state.userProfile = {};
    },
    userPresence(state, payload) {
      state.userPresence = payload;
    }
  },
  actions: {
    SetUserProfile({ commit }, payload) {
      commit('changeUserStatusMutation', payload)
    },
    ClearUserProfile({ commit }) {
      commit('clearUserStatus')
    },
    setUserPresence({ commit }, payload) {
      if (payload == 'online') {
        commit('userPresence', true)
      }

      if (payload == 'offline') {
        commit('userPresence', false)
      }
    }
  },
  getters: {
    getUserProfile: state => {
      return state.userProfile
    },
    getUserStatus: state => {
      return state.userStatus
    },
    getUserPresence: state => {
      return state.userPresence
    }
  },
  modules: {
  }
})
