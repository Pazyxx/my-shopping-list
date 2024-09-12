import React, { useContext, useState } from 'react';
import './new-cart-item.styles.scss';
import StyleContainer from '../style-container/style-container.component';
import InputBubble from '../Input-bubble/input-bubble.component.jsx';
import { CartContext } from '../../contexts/cart.context';

const currCartItemObject = {
    quantity : 0, 
    productName : "",
    key : 0,
    isToggle : false
}

const NewCartItem = () => {
    const { cart, setCart, setCartModal, uniqueProductKey, setUniqueProductKey } = useContext(CartContext);
    
    const [currCartItem, setCurrCartItem] = useState(currCartItemObject)

    const onDetailsChange = (name, event) => {
        const { value } = event.target;
        setCurrCartItem({...currCartItem, [name] : value}); // Use computed property names to update the state  
    };

    const onCartItemSubmit = () => { 
        setCartModal(false)
        setCart([...cart, {...currCartItem, key : uniqueProductKey }])
        setCurrCartItem(currCartItemObject)
        setUniqueProductKey(uniqueProductKey + 1)
    }
 
    return (
        <div className="style-container-cart-modal">
            <StyleContainer>
                <div className="add-to-cart-modal-container">
                    <span className="add-to-cart">ADD TO CART</span>
                    <div className="cart-product-details">
                        <InputBubble 
                            name="quantity" 
                            onChange={onDetailsChange} 
                            width="50%" 
                            height="50px" 
                            className="cart-quantity" 
                            type="text" 
                            placeholder="Quantity"
                        />
                        <span>x</span>
                        <InputBubble 
                            name="productName" 
                            onChange={onDetailsChange} 
                            width="90%" 
                            height="50px" 
                            placeholder="Product Name"
                        />
                    </div>
                    <button onClick={onCartItemSubmit} className="submit-button">Done</button>
                </div>
            </StyleContainer>
        </div>
    );
}

export default NewCartItem;
