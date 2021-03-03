import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userStatus: 'guest',
    userProfile: {}
  },
  mutations: {
     changeUserStatusMutation (state , payload) {
       state.userStatus = 'loggedIn'
       state.userProfile = payload
     },
     clearUserStatus (state) {
       state.userStatus = "guest";
       state.userProfile = {};
     }
  },
  actions: {
     SetUserProfile ({ commit } , payload) {
       commit('changeUserStatusMutation' , payload)
     },
     ClearUserProfile ({commit}){
       commit('clearUserStatus')
     } 
  },
  getters: {
    getUserProfile: state => {
      return state.userProfile
    },
    getUserStatus: state => {
      return state.userStatus
    }
  },
  modules: {
  }
})
