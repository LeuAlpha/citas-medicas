// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGVj-roG14SMR9TImwFTewlYcjNkc6nlo",
  authDomain: "citas-medicas-823a8.firebaseapp.com",
  projectId: "citas-medicas-823a8",
  storageBucket: "citas-medicas-823a8.firebasestorage.app",
  messagingSenderId: "974611532147",
  appId: "1:974611532147:web:67eee07efd0d04327b9d06",
  measurementId: "G-FCJEEPP9JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);