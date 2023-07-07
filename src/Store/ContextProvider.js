import React, { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]); // State for cart items

  const addItemToCartHandler = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((prevItem) => prevItem.id === item.id);
  
      if (existingItemIndex !== -1) {
        // Item already exists in the cart, increase the amount
        const updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];
        existingItem.amount += Number(item.amount); // Convert item.amount to a number
        return updatedItems;
      }
  
      // Item doesn't exist in the cart, add it as a new item
      return [...prevItems, item];
    });
  };
  
  const removeItemFromCartHandler = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((prevItem) => prevItem.id === item.id);
  
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];
        existingItem.amount -= Number(item.amount);
  
        if (existingItem.amount === 0) {
          // Remove the item from the cart if its amount becomes zero
          updatedItems.splice(existingItemIndex, 1);
        }
  
        return updatedItems;
      }
  
      return prevItems;
    });
  };
  

  const cartContextValue = {
    items: cartItems, // Use the updated cart items state
    totalAmount: 0, // Placeholder for total amount
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
