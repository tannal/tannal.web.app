// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxa7oW4_RTlTinIfyqh0uhOyUwaMSUiQ4",
  authDomain: "tannal.firebaseapp.com",
  projectId: "tannal",
  storageBucket: "tannal.appspot.com",
  messagingSenderId: "165005434949",
  appId: "1:165005434949:web:06596e7ec418dc36ecc32c",
  measurementId: "G-H0LZ259KXY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);