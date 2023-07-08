// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArBh3YJKlUlCZYDKMEC2j-eGRg__qQfes",
  authDomain: "anirudha-blog.firebaseapp.com",
  projectId: "anirudha-blog",
  storageBucket: "anirudha-blog.appspot.com",
  messagingSenderId: "445749456660",
  appId: "1:445749456660:web:49f253876641f408369c01",
  measurementId: "G-GZSHMQRJJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
