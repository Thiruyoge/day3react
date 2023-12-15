// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = () => {
    setCartQuantity((cartQuantity) => cartQuantity + 1);
  };

  const removeFromCart = () => {
    setCartQuantity((cartQuantity) => cartQuantity - 1);
  };

  return (
    <CartContext.Provider value={{ cartQuantity, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
