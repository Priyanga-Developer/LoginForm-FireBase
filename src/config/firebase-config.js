import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import{ getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAhudSn_n7jyfOMpMWxW4WUv5O9YKVVups",
  authDomain: "login-form-8aefe.firebaseapp.com",
  projectId: "login-form-8aefe",
  storageBucket: "login-form-8aefe.appspot.com",
  messagingSenderId: "276961458498",
  appId: "1:276961458498:web:dbfa2d722a26d4f59230db",
  measurementId: "G-S6R5TCRH61"
};

const app = initializeApp(firebaseConfig);
 export const auth= getAuth(app);
 export const googleAuth=new GoogleAuthProvider();
 export const db=getFirestore(app);
