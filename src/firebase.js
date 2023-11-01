// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq2kfnUyxNpFbN3qBnrbk_BLXIFquSqWs",
  authDomain: "brian-36ff3.firebaseapp.com",
  projectId: "brian-36ff3",
  storageBucket: "brian-36ff3.appspot.com",
  messagingSenderId: "375357232943",
  appId: "1:375357232943:web:20863f8c8e330c22d5b3da",
  measurementId: "G-M3T5RZTNCT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();