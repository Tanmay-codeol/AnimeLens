import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDsRMkSU8zvk4vKRvFMz1w7Z-YzhfWW9_E",
  authDomain: "animelens-e77d2.firebaseapp.com",
  projectId: "animelens-e77d2",
  storageBucket: "animelens-e77d2.appspot.com",
  messagingSenderId: "958969870702",
  appId: "1:958969870702:web:b3e2502515ca564576697f",
  measurementId: "G-NHGY0M3DQ8"
};
import App from "./App.jsx";
import "./index.css";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
