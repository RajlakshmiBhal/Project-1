// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV1F3iYzT2Y0zxS7BmUpbosMNqeQZCSXg",
  authDomain: "kisansakti-50e39.firebaseapp.com",
  projectId: "kisansakti-50e39",
  storageBucket: "kisansakti-50e39.firebasestorage.app",
  messagingSenderId: "876466243187",
  appId: "1:876466243187:web:78bd3ef16ca1dbaa118c06",
  measurementId: "G-73MB5Q54X6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };