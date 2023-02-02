
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC56ILAk9QrOcaGD_uVu8Y61PWDM9X97g4",
  authDomain: "ytclone-c8c0c.firebaseapp.com",
  projectId: "ytclone-c8c0c",
  storageBucket: "ytclone-c8c0c.appspot.com",
  messagingSenderId: "955655416042",
  appId: "1:955655416042:web:527d99fcd70148b0370f93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export default app