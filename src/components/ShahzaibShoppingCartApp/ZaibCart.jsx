import React, { createContext, useEffect, useReducer } from "react";
import "./ZaibCart.css";
import ZaibNavBar from "./ZaibNavBar";
import ZaibUseContxtCart from "./ZaibUseContxtCart";
import { Products } from "./Product";
import { reducer } from "./ZaibReducer";
export const ZaibContext = createContext();

// ! Define Initial State.
const InitialState = {
  item: Products,
  totalAmount: 0,
  totalItem: 0,
};

const ZaibCart = () => {
  //! This is reducer hook.
  const [state, dispatch] = useReducer(reducer, InitialState);

  //! Remove Item in list.
  const RemoveItem = id => {
    return dispatch({
      type: "Remove_Item",
      payload: id,
    });
  };

  //! Increment Item in list.
  const Inc = id => {
    return dispatch({
      type: "Increment",
      payload: id,
    });
  };
  //! Decrement Item in list.
  const Dec = id => {
    return dispatch({
      type: "Decrement",
      payload: id,
    });
  };
  //! fow to reflect the another item .
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  return (
    <>
      <ZaibContext.Provider value={{ ...state, RemoveItem, Inc, Dec }}>
        <ZaibNavBar />
        <ZaibUseContxtCart />
      </ZaibContext.Provider>
    </>
  );
};

export default ZaibCart;
