// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "image-upload-e026a.firebaseapp.com",
  projectId: "image-upload-e026a",
  storageBucket: "image-upload-e026a.appspot.com",
  messagingSenderId: "1019313270548",
  appId: "1:1019313270548:web:27aadcd65e5dce7ec85c01"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);