
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGVj-roG14SMR9TImwFTewlYcjNkc6nlo",
  authDomain: "citas-medicas-823a8.firebaseapp.com",
  projectId: "citas-medicas-823a8",
  storageBucket: "citas-medicas-823a8.firebasestorage.app",
  messagingSenderId: "974611532147",
  appId: "1:974611532147:web:67eee07efd0d04327b9d06",
  measurementId: "G-FCJEEPP9JP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
