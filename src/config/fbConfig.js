import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBi0BpEErHCmXxH_ilRlfKXj-RwYf8mC_w",
    authDomain: "ecommerce-1f552.firebaseapp.com",
    databaseURL: "https://ecommerce-1f552.firebaseio.com",
    projectId: "ecommerce-1f552",
    storageBucket: "ecommerce-1f552.appspot.com",
    messagingSenderId: "34645543516"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase