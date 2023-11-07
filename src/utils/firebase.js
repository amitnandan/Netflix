// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBekOL6iVfuG8VeknQqaQ6w5AldVekioxw",
  authDomain: "netflix-fa8d3.firebaseapp.com",
  projectId: "netflix-fa8d3",
  storageBucket: "netflix-fa8d3.appspot.com",
  messagingSenderId: "418146128249",
  appId: "1:418146128249:web:1069adf7020f2682359fa8",
  measurementId: "G-EH1QRQJTH5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
