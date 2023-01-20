import firebase from 'firebase/app';  // Import the firebase/app module
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database"
import 'firebase/database'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_0l0RM_lsfna3BwIzkEfQno0oF8ecACY",
  authDomain: "dzeducation-c2cb1.firebaseapp.com",
  databaseURL: "https://dzeducation-c2cb1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dzeducation-c2cb1",
  storageBucket: "dzeducation-c2cb1.appspot.com",
  messagingSenderId: "834358426409",
  appId: "1:834358426409:web:8467b4474ed84529ae5538",
  measurementId: "G-KJLQZX54CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getDatabase(app)