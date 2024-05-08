// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-68ee3.firebaseapp.com",
  projectId: "mern-blog-68ee3",
  storageBucket: "mern-blog-68ee3.appspot.com",
  messagingSenderId: "810898782410",
  appId: "1:810898782410:web:a91eda237da01a720adc33"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);