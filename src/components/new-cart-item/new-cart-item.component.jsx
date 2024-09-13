import React, { useContext, useState, useEffect } from 'react';
import './new-cart-item.styles.scss';
import StyleContainer from '../style-container/style-container.component';
import InputBubble from '../Input-bubble/input-bubble.component.jsx';
import { CartContext } from '../../contexts/cart.context';

const currCartItemObject = {
  quantity: 1,
  productName: "",
  key: 0,
  isToggle: false,
};

const NewCartItem = () => {
  const { cart, setCart, 
    setCartModal, uniqueProductKey, 
    setUniqueProductKey, setEditBool, 
    editBool, editedProduct, 
    updateProduct, setUpdateProduct } = useContext(CartContext);

  const [currCartItem, setCurrCartItem] = useState(editBool ? editedProduct : currCartItemObject);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onDetailsChange = (name, event) => {
    const { value } = event.target;
    setCurrCartItem({ ...currCartItem, [name]: value });
  };

    const updateCart = () => {
        
        const updatedProductInCart = cart.map(product => {
            if (product.key === editedProduct.key){
                return {...product, productName: currCartItem.productName, quantity: currCartItem.quantity}
            }
            return product
        })
        setCart(updatedProductInCart)
        setCurrCartItem(currCartItemObject);
        setCartModal(false);
        setEditBool(false)
    }

  const onCartItemSubmit = () => {
    if (editBool){
        updateCart()
    }else if(currCartItem.productName.length) {
      if (!currCartItem.quantity) {
        setCurrCartItem({ ...currCartItem, quantity: 1 });
      }
      setIsSubmitted(true);
    }

  };

  

  useEffect(() => {
        if (isSubmitted) {
            setCart([...cart, { ...currCartItem, key: uniqueProductKey }]);
            setUniqueProductKey(uniqueProductKey + 1);
            setIsSubmitted(false);
            setCurrCartItem(currCartItemObject);
            setCartModal(false);
        }
        
    },[isSubmitted]);

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
              placeholder="Quantity"
              {...(editBool ? { value: currCartItem.quantity } : {})}
            />
            <span>x</span>
            <InputBubble
              name="productName"
              onChange={onDetailsChange}
              width="90%"
              height="50px"
              placeholder="Product Name"
              {...(editBool ? { value: currCartItem.productName } : {})}
            />
          </div>
          <button onClick={onCartItemSubmit} className="submit-button">Done</button>
        </div>
      </StyleContainer>
    </div>
  );
};

export default NewCartItem;
