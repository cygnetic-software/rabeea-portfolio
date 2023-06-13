// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfBpAmestSZu9_r2rFvFh8qGbnMsrN-6E",
  authDomain: "rabeea-portfolio.firebaseapp.com",
  projectId: "rabeea-portfolio",
  storageBucket: "rabeea-portfolio.appspot.com",
  messagingSenderId: "657428282538",
  appId: "1:657428282538:web:f1bb0fcf395034ab9864d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
