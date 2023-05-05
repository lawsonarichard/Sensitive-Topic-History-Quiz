// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm8BpR5ozkW7bqr47Y7IwVtA9cqfm_I3U",
  authDomain: "studios-fcd2c.firebaseapp.com",
  projectId: "studios-fcd2c",
  storageBucket: "studios-fcd2c.appspot.com",
  messagingSenderId: "1048094544555",
  appId: "1:1048094544555:web:dada62348fa4f781f35dee",
  measurementId: "G-5GYRFPZM9T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
