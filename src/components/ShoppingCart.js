import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (recipe) => {
    // Check if the recipe is already in the cart
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === recipe.id
    );

    // If the recipe is not in the cart, add it with quantity 1
    if (existingItemIndex === -1) {
      setCartItems([
        ...cartItems,
        { ...recipe, quantity: 1, totalPrice: recipe.price },
      ]);
    } else {
      // If the recipe is already in the cart, increase the quantity
      const updatedCartItems = cartItems.map((item, index) => {
        if (index === existingItemIndex) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.totalPrice + recipe.price,
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    }

    // Update total price
    setTotalPrice((prevTotal) => prevTotal + recipe.price);
  };

  const removeFromCart = (recipeId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== recipeId);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, totalPrice, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
