import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAP8cNhX3477b7FO2ztrwLw4tndQk6K8-k",
    authDomain: "chores-app-b2c42.firebaseapp.com",
    projectId: "chores-app-b2c42",
    storageBucket: "chores-app-b2c42.firebasestorage.app",
    messagingSenderId: "834050891874",
    appId: "1:834050891874:web:c7cddd7b5d6c9996c6313b",
    measurementId: "G-G2F6VXDJR3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };