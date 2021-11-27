// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO1mL5hsiKqe9OWuTvo2Gb_HzyfVeRJzo",
  authDomain: "fir-auth-86358.firebaseapp.com",
  databaseURL: "https://fir-auth-86358-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-auth-86358",
  storageBucket: "fir-auth-86358.appspot.com",
  messagingSenderId: "63810727117",
  appId: "1:63810727117:web:318f4627174f6ed5828d84"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();

export default db;
export { auth };