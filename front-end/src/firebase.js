// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwtgAxX3xq_h6-_W5A3ie5MWL5OIefSks",
  authDomain: "chit-chat-connect.firebaseapp.com",
  projectId: "chit-chat-connect",
  storageBucket: "chit-chat-connect.appspot.com",
  messagingSenderId: "706014202709",
  appId: "1:706014202709:web:291c40e03c53b266ec3ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth, app};