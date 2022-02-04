// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWpdgBf82Hvi3E1kjIJd3pP9dz0L3F_P0",
  authDomain: "uber-nextclone-e5d79.firebaseapp.com",
  projectId: "uber-nextclone-e5d79",
  storageBucket: "uber-nextclone-e5d79.appspot.com",
  messagingSenderId: "391680519443",
  appId: "1:391680519443:web:320570f6f1ac3b6c883ee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth();

export {app, provider, auth}