import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from "./App";
console.log(firebase);

const root = ReactDOM.createRoot(document.getElementById('root')); 
//위 부분 유심히 볼 것
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

