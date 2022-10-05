import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyD1VIFVV3bKtlXF0Gbf98g8E-G-Tcc7yM8",
  authDomain: "kooms-day.firebaseapp.com",
  projectId: "kooms-day",
  storageBucket: "kooms-day.appspot.com",
  messagingSenderId: "227343921859",
  appId: "1:227343921859:web:fb39b5329ff07e0aee2876",
  measurementId: "G-EZS3S4CVCW",
  databaseURL: "https://kooms-day-default-rtdb.asia-southeast1.firebasedatabase.app"  // 리얼타임 디비 위치가 달라서 하드코딩
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const db = getDatabase(app);

export {firestore, db};