// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpjSisGMYrvBXOLKQ4ULaeNmK5zU_8K-w",
  authDomain: "shashichatapp.firebaseapp.com",
  databaseURL: "https://shashichatapp-default-rtdb.firebaseio.com",
  projectId: "shashichatapp",
  storageBucket: "shashichatapp.appspot.com",
  messagingSenderId: "837915550458",
  appId: "1:837915550458:web:df32edf2030c97e2159f43"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
