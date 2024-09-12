// Home.jsx
import React, { useContext } from 'react';
import { ShoppingListsContext } from "../../contexts/shopping-lists.context";
import NewShoppingList from "../../components/new-shopping-list/new-shopping-list.component";
import ShoppingLists from "../../components/shopping-lists/shopping-lists.component";
import Modal from "../../components/Modal/modal.component";
import Plus from '../../assets/plus.svg';
import './home.styles.scss';
import StyleContainer from '../../components/style-container/style-container.component';

const Home = () => {
  const { newShoppingListModal, setNewShoppingListModal } = useContext(ShoppingListsContext);

  return (
    <div className='my-man'>
      <StyleContainer>
        <div className='shopping-lists-container-main'>
          <div className="icon-position">
            <img onClick={() => setNewShoppingListModal(true)} src={Plus} alt="Create new shopping list" />
          </div>
        
          {newShoppingListModal && (
            <Modal onClose={() => setNewShoppingListModal(false)}>
              <NewShoppingList />
            </Modal>
          )}
          <ShoppingLists />
        </div>
      </StyleContainer>
    </div>
  );
};

export default Home;
