import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// we get this from project overview on firebase store
const config = {
    apiKey: "AIzaSyDBzFFQrEI709C7mBA4GimH1CnACtbu3Rs",
    authDomain: "ztm-ecom-yg1.firebaseapp.com",
    projectId: "ztm-ecom-yg1",
    storageBucket: "ztm-ecom-yg1.appspot.com",
    messagingSenderId: "844692593974",
    appId: "1:844692593974:web:2d32908d3493e827daa797"
  };

firebase.initializeApp(config);


//Get user UUID and store user in firebase DB only when user is signed In

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

//Create a new user using data from our user auth object
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};




export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;