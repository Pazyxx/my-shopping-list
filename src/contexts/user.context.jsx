import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getUserDoc,
  setListsToDb,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  userDoc: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userDoc, setUserDoc] = useState(null);
    const [ userStatus, setUserStatus ] = useState(false)
    const [initialShoppingList, setInitialShoppingList] = useState(false)

    const value = { setUserStatus, userStatus, initialShoppingList, setInitialShoppingList, currentUser, setCurrentUser, userDoc , setUserDoc};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if (user) {
                await createUserDocumentFromAuth(user);
                const userSnapshot = await getUserDoc(user);
                setInitialShoppingList(true)
                setUserDoc(userSnapshot.data());
                setUserStatus(true)
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

  


    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
