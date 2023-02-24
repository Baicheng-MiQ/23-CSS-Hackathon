// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAOpF7ATeSmhtyJFCcK-nAiDv6HDRgEJQ",
  authDomain: "css-hackathon-745f5.firebaseapp.com",
  projectId: "css-hackathon-745f5",
  storageBucket: "css-hackathon-745f5.appspot.com",
  messagingSenderId: "584732613243",
  appId: "1:584732613243:web:fd963b268892c1372ae0de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }