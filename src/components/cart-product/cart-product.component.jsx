import "./cart-product.styles.scss"
import Remove from "../../assets/remove.svg"
import Edit from "../../assets/edit.svg"
import { CartContext } from "../../contexts/cart.context"
import { useState, useContext } from "react"

const CartProduct = ({productName, quantity, productKey, isToggle}) => {
    // const [isToggle, setIsToggle] = useState(false)
    const { cart, setCart, setEditBool, setCartModal, setEditedProduct, editedProduct } = useContext(CartContext)

    const removeProductHandler = () => {
        const updatedCart = cart.filter(product => {
            return product.key != productKey
        })
        
        setCart(updatedCart)
    }

    const toggleHandler = () => {
        setCart(cart.map(product => 
            
            product.key === productKey
                ? { ...product, isToggle: !product.isToggle }
                : product
        ));
    };

    const editHandler = () => {
        setEditedProduct({"productName" : productName, "quantity" : quantity, "key" : productKey})
        setCartModal(true)
        setEditBool(true)

        
    }

    

    return(
        <div className={`cart-product-container ${isToggle ? "is-toggle" : "is-not-toggle"}`}>
            <div className="quantity-span-container">
                <span>{quantity} x</span>
            </div>
            <div className="product-name-span-container">
                <span onClick={toggleHandler}>{productName}</span>
            </div>
            <div className="remove-cart-product">
                <img src={Edit} alt="" onClick={editHandler}/>
                <img src={Remove} alt="" onClick={removeProductHandler} />
            </div>
        </div>
    )
}

export default CartProduct