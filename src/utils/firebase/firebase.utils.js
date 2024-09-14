import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    updateDoc,  // Import the updateDoc function
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8vGR6G62bbm60J2f1S1U20or1NV9iaQE",
  authDomain: "shopping-lists-ff364.firebaseapp.com",
  projectId: "shopping-lists-ff364",
  storageBucket: "shopping-lists-ff364.appspot.com",
  messagingSenderId: "144343849056",
  appId: "1:144343849056:web:074f964ea3874e2a834b05",
  measurementId: "G-H02JE3CRFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                lists: [], // Initialize lists as an empty object
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};

export const getUserDoc = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    return userSnapshot;
};

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);

export const setListsToDb = async (userAuth, newLists) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    try {
        await updateDoc(userDocRef, {
            lists: newLists,
        });
        
    } catch (error) {
        console.log('Error updating the lists', error.message);
    }

};

export const signOutUser = async () => await signOut(auth);