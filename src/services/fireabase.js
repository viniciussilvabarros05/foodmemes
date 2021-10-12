

import firebase from "firebase/compat/app"

import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCOU2988e16EZZjv48mjnngJGXWtsVX0no",
    authDomain: "foodmemes-e702c.firebaseapp.com",
    projectId: "foodmemes-e702c",
    storageBucket: "foodmemes-e702c.appspot.com",
    messagingSenderId: "626036388327",
    appId: "1:626036388327:web:ec42ca1732c26ddbf94d42"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth()