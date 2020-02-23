import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDlJ10SuDwyd5Q8R4OtUdqd3Zw8KR2fU7g",
    authDomain: "react-e-commerce-2a678.firebaseapp.com",
    databaseURL: "https://react-e-commerce-2a678.firebaseio.com",
    projectId: "react-e-commerce-2a678",
    storageBucket: "react-e-commerce-2a678.appspot.com",
    messagingSenderId: "276690509506",
    appId: "1:276690509506:web:ce595c48c475d2cc7d255b"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }   
    }

    return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;