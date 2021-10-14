import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyC96RPm7hHuGy6N7tcz77bDI5eOUMoshZk",
  authDomain: "adda-today.firebaseapp.com",
  projectId: "adda-today",
  storageBucket: "adda-today.appspot.com",
  messagingSenderId: "960826976364",
  appId: "1:960826976364:web:1e2904f26430b1af961049"
}).auth();