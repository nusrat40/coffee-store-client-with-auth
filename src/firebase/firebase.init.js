// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYxfPuzSpJA-4qO6lGs1LaaMjcuDA4hz4",
  authDomain: "coffee-store-1ab68.firebaseapp.com",
  projectId: "coffee-store-1ab68",
  storageBucket: "coffee-store-1ab68.firebasestorage.app",
  messagingSenderId: "919776272464",
  appId: "1:919776272464:web:cafecd02caae18c64af155"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);