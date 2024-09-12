import "./cart-products.styles.scss"
import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"
import CartProduct from "../cart-product/cart-product.component"

const CartProducts = () => {
    const { cart } = useContext(CartContext)
    
    return (
        <div className="cart-products-container">
                {
                    cart.map(product => {
                        
                        return(
                            <CartProduct isToggle={product.isToggle} productName={product.productName} quantity={product.quantity} productKey={product.key}/>
                        )
                    })
                }
        </div>
    )
}

export default CartProducts