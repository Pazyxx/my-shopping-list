import "./shopping-list.styles.scss"
import Remove from "../../assets/remove.svg"
import {ShoppingListsContext} from "../../contexts/shopping-lists.context.jsx"
import { CartContext } from "../../contexts/cart.context.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ShoppingList = ({shoppingList}) => {
    const { shoppingLists, setShoppingLists, updateCurrentShoppingList, setCurrentShoppingList } = useContext(ShoppingListsContext)
    const { setCart, cart } = useContext(CartContext)
    const navigate = useNavigate()

    const removeHandler = () => {
        const updatedShoppingList = shoppingLists.filter(list => {
            return list.key != shoppingList.key
        })
        setShoppingLists(updatedShoppingList)
    }

    const onShoppingListClickHandler = (key) => { 
        navigate("/shopping-list")
        const currList = shoppingLists.find(list => list.key === key);
        if (Object.keys(currList.items).length){
            setCart(currList.items)
        }else{
            setCart([])
        }
        
        setCurrentShoppingList(currList);
    }

    return (
        <div onClick={() => onShoppingListClickHandler(shoppingList.key)} className="single-shopping-list-container">
            <h1 className="shopping-list-name">{shoppingList.title}</h1>
            <img onClick={(e) => {
                    e.stopPropagation();
                    removeHandler()
                }}
                src={Remove}
                alt="Remove"
            />
        </div>
    )
}

export default ShoppingList