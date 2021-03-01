import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userStatus: "guest",
    userProfile: {},
  },
  mutations: {
    changeUserStatusMutation(state, payload) {
      state.userStatus = "loggedIn";
      state.userProfile = payload;
    },
    userLoggedOut(state) {
      state.userProfile = {};
      state.userStatus = "guest";
    },
  },
  actions: {
    changeUserStatus({ commit }, payload) {
      commit("changeUserStatusMutation", payload);
    },
    loggedOut({ commit }) {
      commit("userLoggedOut");
    },
  },
  getters: {
    getUserProfile: (state) => {
      return state.userProfile;
    },
    getUserStatus: (state) => {
      return state.userStatus;
    },
  },
  modules: {},
});
