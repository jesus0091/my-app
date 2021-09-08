
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBj8QHB4GT3f5BXI594IQ_b_FOFB3j5tcs",
  authDomain: "app-decohome.firebaseapp.com",
  projectId: "app-decohome",
  storageBucket: "app-decohome.appspot.com",
  messagingSenderId: "956178743300",
  appId: "1:956178743300:web:38a6043d6aa89352953551"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);