import React, { createContext, useEffect, useReducer } from "react";
import "./Cart.css";
import { products } from "./product";
import NavBar from "./NavBar";
import UseContxtCart from "./UseContxtCart";
import { reducer } from "./Reducer";

//! it is createContext method and its export and use in other componentes.
export const CartContext = createContext();

//! Initial value of useReducer
const InitialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  //! Creacte useReducer hook.
  const [state, dispatch] = useReducer(reducer, InitialState);

  //! Define the RemoveItem Function.
  const RemoveItem = id => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  //! RemoveAll Item Fuction.
  const AllItemRemove = () => {
    return dispatch({
      type: "REMOVE_ALL_ITEM",
    });
  };

  // ! Increment Number
  const Increment = id => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  // ! Decrement Number
  const Decrement = id => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  //! we will use UseEffect for update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  return (
    <>
      <CartContext.Provider
        value={{ ...state, RemoveItem, AllItemRemove, Increment, Decrement }}
      >
        <NavBar />
        <UseContxtCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
