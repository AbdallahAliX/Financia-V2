import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC8lqNhQchY2WwqExyZrB85lzvQFyhKliM",
  authDomain: "financia-5dce7.firebaseapp.com",
  databaseURL: "https://financia-5dce7-default-rtdb.firebaseio.com",
  projectId: "financia-5dce7",
  storageBucket: "financia-5dce7.appspot.com",
  messagingSenderId: "232085690430",
  appId: "1:232085690430:web:1459d54f97c2ceeba1d96f",
});

export const auth = app.auth();
export default app;
