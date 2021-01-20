import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
import 'firebase/firestore';
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCVkJCcKWPdvYQrZu3SZKpgXmRQcVbwdtA",
  authDomain: "chat-app-d2c1e.firebaseapp.com",
  projectId: "chat-app-d2c1e",
  storageBucket: "chat-app-d2c1e.appspot.com",
  messagingSenderId: "143877877670",
  appId: "1:143877877670:web:77d015155caad7d333a967"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
