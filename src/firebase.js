import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBtou7CaWeGM6kZcMGmsrnvQgbfg-WKt-c",
  authDomain: "jabu-chat-app.firebaseapp.com",
  databaseURL: "https://jabu-chat-app-default-rtdb.firebaseio.com",
  projectId: "jabu-chat-app",
  storageBucket: "jabu-chat-app.appspot.com",
  messagingSenderId: "114300938220",
  appId: "1:114300938220:web:5a3a27446a009778a5c2c9",
  measurementId: "G-KS2KHG7J3G"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore()
