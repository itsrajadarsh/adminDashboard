// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4CXz6haIiWTMUYP0L_mv4TZK7YoVcX6M",
    authDomain: "admino-7a21d.firebaseapp.com",
    projectId: "admino-7a21d",
    storageBucket: "admino-7a21d.firebasestorage.app",
    messagingSenderId: "665476924236",
    appId: "1:665476924236:web:80e92d9b987083ad8645e9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signInWithEmailAndPassword, signOut };