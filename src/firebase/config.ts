import { initializeApp, FirebaseApp, FirebaseOptions } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// require("dotenv").config();

// const firebaseConfig: FirebaseOptions = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MEESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

//FIX ME: This is a temporary fix for the firebase config issue
const firebaseConfig = {
  apiKey: "AIzaSyBwh2j34n_6Ntis8KzxTvNqHR_DOzB-kro",
  authDomain: "prueba-ionic-react.firebaseapp.com",
  projectId: "prueba-ionic-react",
  storageBucket: "prueba-ionic-react.appspot.com",
  messagingSenderId: "1076172648159",
  appId: "1:1076172648159:web:5adec81f96b4bfb897836a",
};
export const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
