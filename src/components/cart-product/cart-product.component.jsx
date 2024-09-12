import "./cart-product.styles.scss"
import Remove from "../../assets/remove.svg"
import { CartContext } from "../../contexts/cart.context"
import { useState, useContext } from "react"

const CartProduct = ({productName, quantity, productKey, isToggle}) => {
    // const [isToggle, setIsToggle] = useState(false)
    const { cart, setCart } = useContext(CartContext)

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

    

    return(
        <div className={`cart-product-container ${isToggle ? "is-toggle" : "is-not-toggle"}`}>
            <div className="quantity-span-container">
                <span>{quantity} x</span>
            </div>
            <div className="product-name-span-container">
                <span onClick={toggleHandler}>{productName}</span>
            </div>
            <div className="remove-cart-product">
                <img src={Remove} alt="" onClick={removeProductHandler} />
            </div>
        </div>
    )
}

export default CartProduct