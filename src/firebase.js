// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOtRCWa0VYnqNM-0ltOTMEvOPSJ9kq37I",
  authDomain: "my-ecommerce-8ba36.firebaseapp.com",
  projectId: "my-ecommerce-8ba36",
  storageBucket: "my-ecommerce-8ba36.appspot.com",
  messagingSenderId: "891187730047",
  appId: "1:891187730047:web:b4becaec79f5826b03114a",
  measurementId: "G-CWZ41WPQPC",
};

const firebaseApp = firebase.initializeApp (firebaseConfig); 

const db = firebaseApp.firestore(); 
const auth = firebase.auth(); 

export {db, auth};
