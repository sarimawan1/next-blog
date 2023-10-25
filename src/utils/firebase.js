// Import the functions we need for SDK
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that being use
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app.firebaseapp.com",
  projectId: "blog-app-54320",
  storageBucket: "blog-app.appspot.com",
  messagingSenderId: "791418441102",
  appId: "1:791418441102:web:de41a44601b118105168df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);