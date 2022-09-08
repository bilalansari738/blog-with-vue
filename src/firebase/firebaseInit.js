import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBHCcpJ62KVERYgav-T1V4t6dek-XLU1Mw",
    authDomain: "fireblog-9378d.firebaseapp.com",
    projectId: "fireblog-9378d",
    storageBucket: "fireblog-9378d.appspot.com",
    messagingSenderId: "265064147170",
    appId: "1:265064147170:web:64d205a71183f5993e56bb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const timestamp = firebase.firestore.FieldValue.servertimestamp

  export {timestamp}
  export default firebaseApp.firestore();