// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7-aHDRQPZKLGFpke1J7nt5gCQdM1D3n8",
  authDomain: "chat-71de6.firebaseapp.com",
  projectId: "chat-71de6",
  storageBucket: "chat-71de6.appspot.com",
  messagingSenderId: "851143925821",
  appId: "1:851143925821:web:9ef2189af717434ba30a54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();
export const db=getFirestore(app);