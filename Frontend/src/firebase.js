// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBauhhjBo85dywE50GWexyN7lmFwQwo1XY",
  authDomain: "sahayak-3c049.firebaseapp.com",
  projectId: "sahayak-3c049",
  storageBucket: "sahayak-3c049.firebasestorage.app",
  messagingSenderId: "661129071139",
  appId: "1:661129071139:web:b9d1afc88553c867a43f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

export { auth, app };