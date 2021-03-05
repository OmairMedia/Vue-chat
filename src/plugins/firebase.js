import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1Jvwy4RctqbW62biHAYS37jx3pr63opI",
  authDomain: "nuxtproject-7d900.firebaseapp.com",
  databaseURL: "https://nuxtproject-7d900.firebaseio.com",
  projectId: "nuxtproject-7d900",
  storageBucket: "nuxtproject-7d900.appspot.com",
  messagingSenderId: "794248302889",
  appId: "1:794248302889:web:5b8c394446ff98a8caa738",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const fb = firebase;

export default fb;
