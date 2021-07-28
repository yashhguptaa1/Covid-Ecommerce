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
//we get userAuth object from auth lib of firebase when usser signs in
export const createUserProfileDocument = async (userAuth, additionalData) => {

  //we want to store data only if user exists
  if (!userAuth) return;

  //Two types of objects that we can get from firestore
  //references and snapshots
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

//Create a new user using data from our userAuth object
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//What this means is that we want to always trigger the Google pop up whenever we use this Google auth
//provider for authentication and signin and I'll show you what I mean when we use it.
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;