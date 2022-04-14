// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyZqabr4YqpGZDAklaL2AJlZm4gXkvu_A",
  authDomain: "geinouss-cars-services.firebaseapp.com",
  projectId: "geinouss-cars-services",
  storageBucket: "geinouss-cars-services.appspot.com",
  messagingSenderId: "876452368334",
  appId: "1:876452368334:web:b11ef238f568dcc8cba59f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth; 