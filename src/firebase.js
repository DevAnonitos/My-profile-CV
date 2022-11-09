// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB6Yn7h0JtfSzCCXlaysL86yp1IQlaoBxs",
  authDomain: "reactjs-login-dashboard.firebaseapp.com",
  projectId: "reactjs-login-dashboard",
  storageBucket: "reactjs-login-dashboard.appspot.com",
  messagingSenderId: "783719484016",
  appId: "1:783719484016:web:d5a1756fc36193c22042b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);