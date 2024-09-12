// ShoppingLists.jsx
import "./shopping-lists.styles.scss";
import { ShoppingListsContext } from "../../contexts/shopping-lists.context";
import { useContext } from "react";
import ShoppingList from "../shopping-list/shopping-list.component";

const ShoppingLists = () => {
  const { shoppingLists } = useContext(ShoppingListsContext);
  return (
    <div className="shopping-lists-container">
      {(shoppingLists.length) ? (shoppingLists.map(list => (
        <ShoppingList key={list.key} shoppingList={list} />
      ))) : (<span className="currently-no-shoppinglists">No Shoppinglists</span>)
      }
      
    </div>
  );
};

export default ShoppingLists;
