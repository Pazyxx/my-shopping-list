import "./new-item-modal.component.scss"
import { CartContext } from "../../contexts/cart.context"
import { useContext } from "react"

const NewItemModal = ({children}) => {
    const {cartModal, setCartModal, editBool, setEditBool} = useContext(CartContext)
    const closeModal = () => {
        setCartModal(false)
        if (editBool){
        setEditBool(false)
        }
    }
    return (
        <div onClick={closeModal}className="new-item-modal-container">
            <div className="new-item-modal-box" onClick={e => e.stopPropagation()}>
                <button className="modal-close-button" onClick={closeModal} >
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}

export default NewItemModal