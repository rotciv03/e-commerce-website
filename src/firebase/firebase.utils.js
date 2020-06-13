import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBbCeV-b665v9vIKjV_uTAOJXQEX0AubZs",
  authDomain: "e-commerce-799a3.firebaseapp.com",
  databaseURL: "https://e-commerce-799a3.firebaseio.com",
  projectId: "e-commerce-799a3",
  storageBucket: "e-commerce-799a3.appspot.com",
  messagingSenderId: "1084404078559",
  appId: "1:1084404078559:web:9a1bb57ccb81d7a2e3566a",
  measurementId: "G-CTFJ86YQV8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
