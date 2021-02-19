import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAIcnHqjpv2BJFai10IydZ7xrAZdSbmwBI",
    authDomain: "vijay-choudhary-portfolio.firebaseapp.com",
    projectId: "vijay-choudhary-portfolio",
    storageBucket: "vijay-choudhary-portfolio.appspot.com",
    messagingSenderId: "660768774693",
    appId: "1:660768774693:web:64e72ba21a87fdea37fdcc",
    measurementId: "G-VYBWZNMLL7"
});

const db = firebaseApp.firestore()

export { db };