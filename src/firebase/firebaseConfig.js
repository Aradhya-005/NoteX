
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDyvCzIgvIQhXr5lVUN10rzHRWsMYp8cOI",
  authDomain: "notex-963b1.firebaseapp.com",
  projectId: "notex-963b1",
  storageBucket: "notex-963b1.appspot.com",
  messagingSenderId: "224303062228",
  appId: "1:224303062228:web:11fabfb2b60161bfbfaf41",
  measurementId: "G-8S0PHQXFL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app