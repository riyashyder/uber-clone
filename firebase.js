// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5WuLP_a5sQ4zuazY-Vz_lbPz0G62iX48",
  authDomain: "uber-project-efb11.firebaseapp.com",
  projectId: "uber-project-efb11",
  storageBucket: "uber-project-efb11.appspot.com",
  messagingSenderId: "262707348329",
  appId: "1:262707348329:web:00ccd841971c5d6cb533f8",
  measurementId: "G-69HY797LHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth();
// const analytics = getAnalytics(app);

export {app, provider, auth}