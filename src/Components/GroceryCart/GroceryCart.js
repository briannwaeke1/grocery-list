import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { produce, pantryItems } from "../StoreItems/StoreItems";

// Declare and initialize a state variable called cart that will keep track of a list of string values.
export default function GroceryCart() {
    const [cart, setCart] = useState([]);
  
    // event handler to add item to cart
    const addItem = (item) => {
      setCart((prev) => {
          // using array spread syntax to add new item to cart state
        return [item, ...prev];
      });
    };

      // event handler to remove item from cart
    const removeItem = (targetIndex) => {
      setCart((prev) => {
          // using array filter() method to remove the item from our state that’s located at the index of the item that was clicked in our list
        return prev.filter((item, index) => index !== targetIndex);
      });
    };
  
    return (
      <div>
        <h1>Grocery Cart</h1>
        <ul>
          {cart.map((item, index) => (
            <li onClick={() => removeItem(index)} key={index}>
              {item}
            </li>
          ))}
        </ul>
        <h2>Produce</h2>
        <ItemList items={produce} onItemClick={addItem} />
        <h2>Pantry Items</h2>
        <ItemList items={pantryItems} onItemClick={addItem} />
      </div>
    );
  }
  