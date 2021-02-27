import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userStatus: 'guest'
  },
  mutations: {
     changeUserStatusMutation ({state}) {
       state.userStatus = 'loggedIn'
     }
  },
  actions: {
    
  },
  modules: {
  }
})
