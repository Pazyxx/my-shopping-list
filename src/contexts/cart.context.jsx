import { createContext, useContext, useEffect, useState, useRef } from "react";
import { ShoppingListsContext } from "./shopping-lists.context";
import { UserContext } from "./user.context";
import { setListsToDb } from "../utils/firebase/firebase.utils";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { setUserDoc, userDoc } = useContext(UserContext)
    const { shoppingLists, currentShoppingList, setCurrentShoppingList, setShoppingLists } = useContext(ShoppingListsContext);
    const [cartModal, setCartModal] = useState(false);
    const [editBool, setEditBool] = useState(false)
    const [cart, setCart] = useState([]);
    const [uniqueProductKey, setUniqueProductKey] = useState(0)
    const [updateProduct, setUpdateProduct] = useState(false)
    const [isUpdated, setIsUpdated] = useState(false);
    const [editedProduct, setEditedProduct] = useState({})
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            if (currentShoppingList){
                setCurrentShoppingList(prevState => ({ ...prevState, items: cart }));
                setIsUpdated(true);
            }
        }
    }, [cart]);

    useEffect(() => {
        if (isUpdated) {
            updatedShoppingLists();
            setIsUpdated(false);
        }
    }, [isUpdated, currentShoppingList]);

    const updatedShoppingLists = () => {
        let idx = -1;
        shoppingLists.forEach((list, index) => {
            if (list.key === currentShoppingList.key) {
                idx = index;
            }
        });
        const newShoppingLists = [...shoppingLists];
        if (idx >= 0) {
            newShoppingLists[idx] = currentShoppingList;
        } else {
            newShoppingLists.push(currentShoppingList);
        }
        setShoppingLists(newShoppingLists);
    };



    

    

    const value = { updateProduct, setUpdateProduct, editedProduct, setEditedProduct, editBool, setEditBool, cart, setCart, cartModal, setCartModal, uniqueProductKey, setUniqueProductKey };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
