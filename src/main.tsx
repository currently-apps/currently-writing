import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASleUCdu0c2lL_kOtpfhh7vUoL3zqs6ss",
  authDomain: "currently-apps.firebaseapp.com",
  projectId: "currently-apps",
  storageBucket: "currently-apps.appspot.com",
  messagingSenderId: "233489079371",
  appId: "1:233489079371:web:2a4b98133ece1b9774c1ce",
  measurementId: "G-20GWYBJ0FQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
