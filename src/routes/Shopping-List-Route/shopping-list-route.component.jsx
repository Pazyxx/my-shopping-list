import "./shopping-list-route.styles.scss"
import StyleContainer from "../../components/style-container/style-container.component"
import Plus from "../../assets/plus.svg"
import { ShoppingListsContext } from "../../contexts/shopping-lists.context"
import { useContext } from "react"
import NewItemModal from "../../components/new-item-modal/new-item-modal.component"
import { CartContext } from "../../contexts/cart.context"
import NewCartItem from "../../components/new-cart-item/new-cart-item.component"
import CartProducts from "../../components/cart-products/cart-products.component"
import { useNavigate } from "react-router-dom"

const ShoppingListRoute = () => {
    const {currentShoppingList} = useContext(ShoppingListsContext)
    const { cartModal, setCartModal, cart } = useContext(CartContext)
    const navigate = useNavigate()
    
    return (
        <>
            <div className="shopping-list-width">
                <StyleContainer>
                    <div className="shopping-list-route-style-container">
                        <div className="shopping-list-header">
                                <span className="shoppinglist-title-navigate" onClick={() => navigate("/")} >{currentShoppingList? (currentShoppingList.title) : ""}</span>
                        </div>
                        <div className="create-shopping-item-icon-container">
                            <img onClick={() => setCartModal(!cartModal)} src={Plus} alt="" />
                        </div>
                        {cart.length ? (<CartProducts/>) : (<span className="shoppinglist-empty">Shoppinglist Empty</span>)}
                        
                    </div>
                    {cartModal? 
                    <NewItemModal>
                        <NewCartItem/>
                    </NewItemModal> : ""}
                </StyleContainer>
            </div>
        </>
    )
}

export default ShoppingListRoute;
