import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuz3x4MiQjaDQayHzlXazuM8Zihu65nA8",
  authDomain: "sprout-chat-1a5e1.firebaseapp.com",
  projectId: "sprout-chat-1a5e1",
  storageBucket: "sprout-chat-1a5e1.appspot.com",
  messagingSenderId: "720583591698",
  appId: "1:720583591698:web:531c71554308fd1c33d5cb",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const fb = firebase;

export default fb;
