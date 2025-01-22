import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBVYb-uNyhMadL0R6nWgHicSGgQXXdaqMY",
    authDomain: "wedding-app-8e38c.firebaseapp.com",
    projectId: "wedding-app-8e38c",
    storageBucket: "wedding-app-8e38c.firebasestorage.app",
    messagingSenderId: "148286855352",
    appId: "1:148286855352:web:2c76943f57cdcb61713c4d",
    measurementId: "G-DSK1R5BT93"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const storage = getStorage(app);