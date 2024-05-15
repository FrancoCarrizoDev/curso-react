import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6xrnujt3tjRktz56BZh1FxtMq3sWFzmw",
  authDomain: "react-54120.firebaseapp.com",
  projectId: "react-54120",
  storageBucket: "react-54120.appspot.com",
  messagingSenderId: "556667336953",
  appId: "1:556667336953:web:a7e85123f8355af46d8a28",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
