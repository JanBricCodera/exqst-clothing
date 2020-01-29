import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDPUVoLL8lMB1X0LimLOQ1qeQHH5uK9QyM",
  authDomain: "exqst-db.firebaseapp.com",
  databaseURL: "https://exqst-db.firebaseio.com",
  projectId: "exqst-db",
  storageBucket: "exqst-db.appspot.com",
  messagingSenderId: "1033759366425",
  appId: "1:1033759366425:web:14a8e04368a8aa9351b988",
  measurementId: "G-B7SQC8BBK0"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
