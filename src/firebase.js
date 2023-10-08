// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk8KEuGgIjwhk9Y-7vb497ey7FrYQ2QVA",
  authDomain: "react-hooks-blog-d5342.firebaseapp.com",
  projectId: "react-hooks-blog-d5342",
  storageBucket: "react-hooks-blog-d5342.appspot.com",
  messagingSenderId: "816360081990",
  appId: "1:816360081990:web:149c6f9012117206c4d847"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();