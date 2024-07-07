// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "blog-post-app-428219.firebaseapp.com",
  projectId: "blog-post-app-428219",
  storageBucket: "blog-post-app-428219.appspot.com",
  messagingSenderId: "510878513925",
  appId: "1:510878513925:web:61e899023a10810df5956c",
  measurementId: "G-R5N0MPBFQQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);