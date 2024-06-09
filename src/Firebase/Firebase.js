import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDHCfZjV3XEqzI8DLyzLMX8FAl3h11OPSM",
  authDomain: "flyer-afa0f.firebaseapp.com",
  projectId: "flyer-afa0f",
  storageBucket: "flyer-afa0f.appspot.com",
  messagingSenderId: "232494551539",
  appId: "1:232494551539:web:3e07fbb68e9f1a1a508286",
  measurementId: "G-H84XXFDD2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore=getFirestore(app);
const storage = getStorage(app);

export {app,auth,firestore,storage};