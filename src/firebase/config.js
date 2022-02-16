// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3oxeDqPmCxBm7SWEfTAErRW9lfwwpoJI",
  authDomain: "rocksocks-28021.firebaseapp.com",
  projectId: "rocksocks-28021",
  storageBucket: "rocksocks-28021.appspot.com",
  messagingSenderId: "319075373727",
  appId: "1:319075373727:web:c631ff455480ca684848aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function getFirestoreApp() {
    return app
}