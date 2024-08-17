// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEJhmLDDjEGbzrNbVrTp7NBIS2c66r7ig",
  authDomain: "netflixgpt-8cee7.firebaseapp.com",
  projectId: "netflixgpt-8cee7",
  storageBucket: "netflixgpt-8cee7.appspot.com",
  messagingSenderId: "1057203343681",
  appId: "1:1057203343681:web:6f256800ef696ea4b4d1c0",
  measurementId: "G-GZHKVHQF0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export {auth};