import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQPjtnQZ1-OHFSPWyE-AQ0i94_i7LxtsM",
  authDomain: "cursoreact-87435.firebaseapp.com",
  projectId: "cursoreact-87435",
  storageBucket: "cursoreact-87435.appspot.com",
  messagingSenderId: "6119549173",
  appId: "1:6119549173:web:d1eb106c8edb276e7fbdbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);