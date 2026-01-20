import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase with your config
const firebaseConfig = {
  apiKey: "AIzaSyBujBSd9aC74z8yTbjbzfTLQc5_w3Ey88M",
  authDomain: "ligaf-5a475.firebaseapp.com",
  projectId: "ligaf-5a475",
  storageBucket: "ligaf-5a475.firebasestorage.app",
  messagingSenderId: "578692439472",
  appId: "1:578692439472:web:5f0108dd0582f493738a75"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
