// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgc9HcI_cFv50ED9j04lxx5baDyVYt3nU",
  authDomain: "playora-gamestore-project-ass9.firebaseapp.com",
  projectId: "playora-gamestore-project-ass9",
  storageBucket: "playora-gamestore-project-ass9.firebasestorage.app",
  messagingSenderId: "857810032419",
  appId: "1:857810032419:web:511d471ff8a51d748a5e96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth