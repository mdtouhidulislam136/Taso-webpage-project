// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvm0byF5x9rhFi7OaR21-qzrpDETUIwWY",
  authDomain: "tasowebpage.firebaseapp.com",
  projectId: "tasowebpage",
  storageBucket: "tasowebpage.appspot.com",
  messagingSenderId: "822574389840",
  appId: "1:822574389840:web:afdd3fe27781a02e6b4f55",
  measurementId: "G-XPN31K3P4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
