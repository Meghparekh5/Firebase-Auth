import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBwDrI-M66uCYdIeBU2sYNbzrnNfXvpfIY",
  authDomain: "fir-auth-2a49f.firebaseapp.com",
  databaseURL: "https://fir-auth-2a49f-default-rtdb.firebaseio.com",
  projectId: "fir-auth-2a49f",
  storageBucket: "fir-auth-2a49f.firebasestorage.app",
  messagingSenderId: "583907725040",
  appId: "1:583907725040:web:2a1f23543d9bf179ebbc35"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getDatabase(app);