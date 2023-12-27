// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwYPjWBO_whujXSNSv3R0p4GxIYVS1Zco",
  authDomain: "food-static-site-react.firebaseapp.com",
  projectId: "food-static-site-react",
  storageBucket: "food-static-site-react.appspot.com",
  messagingSenderId: "692664777002",
  appId: "1:692664777002:web:d263c3cbd70bd5378c4653",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
