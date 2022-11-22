// components firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore/lite'

// firebase config
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
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);