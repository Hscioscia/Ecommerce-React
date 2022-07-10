import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAKmGRMdK_amOskUKxYjlHn5OLLE8-4qQI",
  authDomain: "ecommerce-react-c6cb4.firebaseapp.com",
  projectId: "ecommerce-react-c6cb4",
  storageBucket: "ecommerce-react-c6cb4.appspot.com",
  messagingSenderId: "447130788474",
  appId: "1:447130788474:web:333b5dc7c1ce0203a951c3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);