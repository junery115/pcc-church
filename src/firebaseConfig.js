// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALUyBntuNZXLAnT2GPNcinObf-BC6VI4s",
  authDomain: "pcc-beltsville.firebaseapp.com",
  projectId: "pcc-beltsville",
  storageBucket: "pcc-beltsville.appspot.com",
  messagingSenderId: "417521445854",
  appId: "1:417521445854:web:135f1b2c752086d6684b4f",
  measurementId: "G-THZVVVX2S1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, auth, storage}