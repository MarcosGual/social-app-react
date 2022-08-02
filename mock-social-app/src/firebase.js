import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAkr7nLdlwo4v1rZH3vt7BYdZD8IJHMrfc",
    authDomain: "linquedin-fc6ac.firebaseapp.com",
    projectId: "linquedin-fc6ac",
    storageBucket: "linquedin-fc6ac.appspot.com",
    messagingSenderId: "403653649712",
    appId: "1:403653649712:web:3dce594e9583d07af8d4f5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };