import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyARZ3CtW85dZjt_kHgWJ13QyQ4co5PlJAA",
    authDomain: "coderskk.firebaseapp.com",
    projectId: "coderskk",
    storageBucket: "coderskk.appspot.com",
    messagingSenderId: "235428511729",
    appId: "1:235428511729:web:75d24a3855f2fb50cb8e50",
    measurementId: "G-3ED8ENNPBS"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);