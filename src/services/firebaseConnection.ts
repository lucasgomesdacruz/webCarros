
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkKg8AVEGcw6n0dNFtAuikf2-1qinQRr8",
  authDomain: "web-carros-c964b.firebaseapp.com",
  projectId: "web-carros-c964b",
  storageBucket: "web-carros-c964b.appspot.com",
  messagingSenderId: "427650298974",
  appId: "1:427650298974:web:0a2d0c1db07a0f5012b0cf"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage};

