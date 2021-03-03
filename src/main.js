import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fb from './plugins/firebase'

// Global Components 
import navBar from './components/navBar.vue'
Vue.component('navBar' , navBar)


// Firebase Checking User Status
fb.auth().onAuthStateChanged((user) => {
     if(user) {
        let profile = {
          id : user.uid,
          username : user.displayName,
          email: user.email,
          photo : user.photoURL,
          loginAt: Date.now()
        }
        store.dispatch('SetUserProfile', profile)
     } else {
        store.dispatch('ClearUserProfile');
     }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
