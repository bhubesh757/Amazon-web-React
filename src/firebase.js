// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCSsfc96r3JMGqCbFWzDi90EMFr79QEFSw",
    authDomain: "web-d0916.firebaseapp.com",
    projectId: "web-d0916",
    storageBucket: "web-d0916.appspot.com",
    messagingSenderId: "961952492843",
    appId: "1:961952492843:web:9192dbeb16eba4f0a5296e",
    measurementId: "G-VC01VPQ869"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  // const login = firebase.login()
  
  export {db , auth };

  export default firebase