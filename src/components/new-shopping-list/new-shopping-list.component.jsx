import "./new-shopping-list.scss";
import { useState, useContext } from "react";
import { ShoppingListsContext } from "../../contexts/shopping-lists.context";
import StyleContainer from "../style-container/style-container.component";

const NewShoppingList = () => {
  const { shoppingLists, setShoppingLists, setNewShoppingListModal, uniqueKey, setUniqueKey } = useContext(ShoppingListsContext);
  const [listName, setListName] = useState("");
  const [placeholder, setPlaceholder] = useState("Name");

  const inputChangeHandler = (event) => {
    setListName(event.target.value);
  };

 
  const doneHandler = () => {
    if (listName.length) {
      const shoppingListStructure = {
        title: listName,
        key: uniqueKey,
        items: {},
      };
      setUniqueKey(uniqueKey + 1)
      setListName("");
      setShoppingLists([shoppingListStructure, ...shoppingLists]);
      setNewShoppingListModal(false);
    }
  };

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    setPlaceholder("Name");
  };

  return (
    <StyleContainer>
      <div className="modal-new-shopping-list-inner">
        <span className="create-new-list">CREATE A NEW LIST</span>
        <div className="group">
          <input
            className="input"
            required
            onChange={inputChangeHandler}
            value={listName}
            placeholder="Name"
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="text"
          />
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <button className="submit-button" onClick={doneHandler}>Done</button>
      </div>
    </StyleContainer>
  );
};

export default NewShoppingList;
