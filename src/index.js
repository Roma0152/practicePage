import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: 'AIzaSyB_zQcbJqjvzdRygNX-EXyMd88IPvQvPxs',
  authDomain: 'practicepage-a7fa3.firebaseapp.com',
  projectId: 'practicepage-a7fa3',
  storageBucket: 'practicepage-a7fa3.appspot.com',
  messagingSenderId: '277518228006',
  appId: '1:277518228006:web:7a3c2ec028fd92f87ce4e7',
  measurementId: 'G-373FBDZR20',
};

const app = initializeApp(firebaseConfig);

export const Context = createContext(null);

const firebaseApp = getFirestore(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider
    value={{
      firebaseApp,
    }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
);
