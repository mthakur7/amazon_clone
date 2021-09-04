// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDa9EGyFy5ytTmGX6wG4em1exutA7jVoo4",
    authDomain: "clone-e199a.firebaseapp.com",
    projectId: "clone-e199a",
    storageBucket: "clone-e199a.appspot.com",
    messagingSenderId: "999267169004",
    appId: "1:999267169004:web:8945d5afdd7fa8e276ebc9",
    measurementId: "G-RLHESWLW3F"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db, auth};