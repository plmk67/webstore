import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtX0yN4uOAxIRWEu_S6aB75Olhn5koACk",
    authDomain: "webstore-3722d.firebaseapp.com",
    databaseURL: "https://webstore-3722d.firebaseio.com",
    projectId: "webstore-3722d",
    storageBucket: "webstore-3722d.appspot.com",
    messagingSenderId: "698492691216",
});

const db = firebaseApp.firestore();

export { db };