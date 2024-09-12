import "./new-item-modal.component.scss"
import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"

const NewItemModal = ({children}) => {
    const {cartModal, setCartModal} = useContext(CartContext)
    return (
        <div onClick={() => setCartModal(false)}className="new-item-modal-container">
            <div className="new-item-modal-box" onClick={e => e.stopPropagation()}>
                <button className="modal-close-button" onClick={() => setCartModal(false)} >
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}

export default NewItemModal