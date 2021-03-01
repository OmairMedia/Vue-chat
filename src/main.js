import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fb from "./plugins/firebase";

// Global Components
import navBar from "./components/navBar.vue";
Vue.component("navBar", navBar);

// Profile Update
fb.auth().onAuthStateChanged((user) => {
  if (user) {
    const profile = {
      id: user.uid,
      username: user.displayName,
      email: user.email,
      photo: user.photoURL,
      loggedOn: Date.now(),
    };

    store.dispatch("changeUserStatus", profile);
  } else {
    store.dispatch("loggedOut");
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
