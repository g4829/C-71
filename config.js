import firebase from 'firebase';
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyAok9QpnJEGgRvouGkPz0XnwIhPcGEq7C0",
    authDomain: "storyhub-45f44.firebaseapp.com",
    databaseURL: "https://storyhub-45f44-default-rtdb.firebaseio.com",
    projectId: "storyhub-45f44",
    storageBucket: "storyhub-45f44.appspot.com",
    messagingSenderId: "637980126389",
    appId: "1:637980126389:web:63952e9dcd0c0751fa22fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

