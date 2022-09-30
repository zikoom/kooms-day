import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1VIFVV3bKtlXF0Gbf98g8E-G-Tcc7yM8",
  authDomain: "kooms-day.firebaseapp.com",
  projectId: "kooms-day",
  storageBucket: "kooms-day.appspot.com",
  messagingSenderId: "227343921859",
  appId: "1:227343921859:web:fb39b5329ff07e0aee2876",
  measurementId: "G-EZS3S4CVCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};