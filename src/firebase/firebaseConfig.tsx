// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW8FFKUbofXIA5zyIVps-JNKCNd4uk9d4",
  authDomain: "health-trak.firebaseapp.com",
  projectId: "health-trak",
  storageBucket: "health-trak.appspot.com",
  messagingSenderId: "329793652465",
  appId: "1:329793652465:web:ac1af852da06bf26548b50",
  measurementId: "G-3DNS8Y7SBY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
