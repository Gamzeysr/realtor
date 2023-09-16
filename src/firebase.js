// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAyQNgfi9kthP_nBIVIAB90CF-pVv-fTw",
  authDomain: "realtor-5003d.firebaseapp.com",
  projectId: "realtor-5003d",
  storageBucket: "realtor-5003d.appspot.com",
  messagingSenderId: "370695813730",
  appId: "1:370695813730:web:38d40625e340f312226f3b",
  measurementId: "G-47DWH898M6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore()
