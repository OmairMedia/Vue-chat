import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fb from './plugins/firebase'




// Firebase Checking User Status
fb.auth().onAuthStateChanged((user) => {
  if (user) {
    let profile = {
      id: user.uid,
      username: user.displayName,
      email: user.email,
      photo: user.photoURL,
      loginAt: Date.now()
    }
    store.dispatch('SetUserProfile', profile)
    checkPresence();
  } else {
    store.dispatch('ClearUserProfile');
  }
})

function checkPresence() {
  // USER PRESENCE SYSTEM FIREBASE
  const db = fb.firestore();
  const usersRef = db.collection('users'); // Get a reference to the Users collection;
  const user = fb.auth().currentUser;
  // Set the specific user's online status to true
  usersRef
    .doc(user.uid)
    .set({
      id: user.uid,
      online: true,
    }, { merge: true }).then(() => {
      store.dispatch('setUserPresence', 'online')
    })

  var presenceRef = fb.database().ref(`vue-chat-users/${user.id}/status`);
  // Write a string when this client loses connection
  presenceRef.onDisconnect().set("I disconnected!");

  const connectedRef = fb.database().ref(".info/connected");
  connectedRef.on("value", (snap) => {
    if (snap.val() === true) {
      console.log("connected");
      store.dispatch('setUserPresence', 'online')
    } else {
      console.log("not connected");
      store.dispatch('setUserPresence', 'offline')

      usersRef
        .doc(user.uid)
        .set({
          id: user.uid,
          online: false,
        }, { merge: true })
    }
  });

}
// Global Components 
import navBar from './components/navBar.vue'
Vue.component('navBar', navBar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
