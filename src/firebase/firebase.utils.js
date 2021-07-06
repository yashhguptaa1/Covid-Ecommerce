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


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;