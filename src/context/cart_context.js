import React, { useContext, useEffect } from "react";

import reducer from "../reducer/cart_reducer";

const getLocal = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocal(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 200,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  //add to cart
  const addToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  //remove item from the cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: id });
  };

  //clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //toggle item's amount
  const toggleAmount = (id, value) => {
    dispatch({ type: "TOGGLE_ITEM_AMOUNT", payload: { id, value } });
  };

  useEffect(() => {
    dispatch({ type: "COUNT_TOTAL" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
