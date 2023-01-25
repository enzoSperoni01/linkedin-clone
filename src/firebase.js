import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBsGpGeigYdIdS6l5S1O2D4ab6doSwdp9Y",
    authDomain: "linkedin-clone-9b792.firebaseapp.com",
    projectId: "linkedin-clone-9b792",
    storageBucket: "linkedin-clone-9b792.appspot.com",
    messagingSenderId: "1001084940664",
    appId: "1:1001084940664:web:8c28cf29ac2e345eb7188d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };