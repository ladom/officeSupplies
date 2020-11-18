import React, { createContext, useContext, useReducer } from 'react';
import CartReducer from './CartReducer';

export const CartContext = createContext();

export const CartStateProvider = ({
  products,
  children,
}) => (
  <CartContext.Provider
    value={useReducer(CartReducer, {
      products,
    })}
  >
    {children}
  </CartContext.Provider>
);

export const useCartContext = () => useContext(CartContext);