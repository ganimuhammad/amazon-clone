import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmlNsj7INL8u7SAuxs8J4KU49QFAD9i10",
  authDomain: "clone-67ccf.firebaseapp.com",
  databaseURL: "https://clone-67ccf.firebaseio.com",
  projectId: "clone-67ccf",
  storageBucket: "clone-67ccf.appspot.com",
  messagingSenderId: "909380980599",
  appId: "1:909380980599:web:79fd9476f14b1de8e91b72",
  measurementId: "G-Q8JK1B1XQ3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
