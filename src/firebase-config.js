import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCcv64kWLHiPnAd6d6N25Z4URfe_8HY2IE",
    authDomain: "notekeeper-crud.firebaseapp.com",
    projectId: "notekeeper-crud",
    storageBucket: "notekeeper-crud.appspot.com",
    messagingSenderId: "836181398309",
    appId: "1:836181398309:web:2046cf713d874bb7e500cc",
    measurementId: "G-R9JFTWMJHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firestoreDB = getFirestore(app);