// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg9jMJs5NBA1Kdl2fA6DPfmfIZ6nNBEWw",
  authDomain: "examen-rentas.firebaseapp.com",
  projectId: "examen-rentas",
  storageBucket: "examen-rentas.appspot.com",
  messagingSenderId: "1031105646821",
  appId: "1:1031105646821:web:31f7abca837e177779040c"
};

// Initialize Firebase
export const app= initializeApp(firebaseConfig);
export const db = getFirestore(app);
