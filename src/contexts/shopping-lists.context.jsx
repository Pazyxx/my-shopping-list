import React, { createContext, useState, useEffect, useContext } from 'react';
import { setListsToDb } from '../utils/firebase/firebase.utils';
import { UserContext } from './user.context';



export const ShoppingListsContext = createContext();

export const ShoppingListsProvider = ({ children }) => {
    const { currentUser, userDoc, initialShoppingList, setInitialShoppingList, userStatus } = useContext(UserContext)
    
    

    const [shoppingLists, setShoppingLists] = useState([]);
    const [newShoppingListModal, setNewShoppingListModal] = useState(false);
    const [currentShoppingList, setCurrentShoppingList] = useState(null);
    const [uniqueKey, setUniqueKey] = useState(0);

    
   useEffect(() => {
       
        if (currentUser && userStatus){
            setListsToDb(currentUser, shoppingLists)
        }
   }, [shoppingLists])

   useEffect(() => {
        if (!userStatus){
            setShoppingLists([])
        }
   }, [userStatus])

    useEffect(() => {
        
        if(initialShoppingList){
            
            setShoppingLists([...userDoc.lists])
            setInitialShoppingList(false)
        }
   }, [userDoc])
    

    const value = {
        shoppingLists,
        setShoppingLists,
        newShoppingListModal,
        setNewShoppingListModal,
        currentShoppingList,
        setCurrentShoppingList,
        uniqueKey,
        setUniqueKey,
    };

    return (
        <ShoppingListsContext.Provider value={value}>
            {children}
        </ShoppingListsContext.Provider>
    );
};
