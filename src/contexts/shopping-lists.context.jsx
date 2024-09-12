import React, { createContext, useState, useEffect } from 'react';

export const ShoppingListsContext = createContext();

export const ShoppingListsProvider = ({ children }) => {
    const [shoppingLists, setShoppingLists] = useState([]);
    const [newShoppingListModal, setNewShoppingListModal] = useState(false);
    const [currentShoppingList, setCurrentShoppingList] = useState(null);
    const [uniqueKey, setUniqueKey] = useState(0)

    

    

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
