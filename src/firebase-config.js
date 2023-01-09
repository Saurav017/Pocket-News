// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const ghprovider = new GithubAuthProvider();

const provider = new GoogleAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw3gRE0inla6-9j_L-d5taaLNZ8HUjeL8",
  authDomain: "auth-data-f6090.firebaseapp.com",
  projectId: "auth-data-f6090",
  storageBucket: "auth-data-f6090.appspot.com",
  messagingSenderId: "543410367842",
  appId: "1:543410367842:web:2d3869a0d286d02913103b",
  measurementId: "G-5LXWQ08RCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export { app, auth, provider,ghprovider };