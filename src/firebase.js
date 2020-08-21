import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBKsP2zKwfzs_uJ7jpHrr6nEAvzFFzgsZc",
    authDomain: "clone-cefa6.firebaseapp.com",
    databaseURL: "https://clone-cefa6.firebaseio.com",
    projectId: "clone-cefa6",
    storageBucket: "clone-cefa6.appspot.com",
    messagingSenderId: "774913047910",
    appId: "1:774913047910:web:5eb1153c2f6212791adca7",
    measurementId: "G-FCLDL0FG6N"
});

const auth = firebase.auth();

export {auth };