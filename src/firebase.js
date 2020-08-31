import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDqvlEcNBs1EU4_6d-TR5QoVHl9J8pDotE",
    authDomain: "whatsapp-clone-278e7.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-278e7.firebaseio.com",
    projectId: "whatsapp-clone-278e7",
    storageBucket: "whatsapp-clone-278e7.appspot.com",
    messagingSenderId: "774036007358",
    appId: "1:774036007358:web:f19308907119c569f6b1ef",
    measurementId: "G-F6GX704XNL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
 