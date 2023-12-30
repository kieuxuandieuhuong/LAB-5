import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-d9bxY6HQVYQGo2ZxE489lUHpPIgH6ls",
    authDomain: "project-adff4.firebaseapp.com",
    projectId: "project-adff4",
    storageBucket: "project-adff4.appspot.com",
    messagingSenderId: "879552048331",
    appId: "1:879552048331:web:ba6977bdbf844e72457f4e",
    measurementId: "G-91V1WLN931"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;