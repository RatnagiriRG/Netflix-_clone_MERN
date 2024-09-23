// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaqCWvcs13iyFPzQrJOqMAwYN6T2U-pN4",
  authDomain: "react-cinemasphere.firebaseapp.com",
  projectId: "react-cinemasphere",
  storageBucket: "react-cinemasphere.appspot.com",
  messagingSenderId: "934101777742",
  appId: "1:934101777742:web:21ba99251e94538a22f21f",
  measurementId: "G-VZC1JPCNC6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
