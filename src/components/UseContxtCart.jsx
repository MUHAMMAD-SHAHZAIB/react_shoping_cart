import React, { useContext } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Items from "./Items";

import { CartContext } from "./Cart";

const UseContxtCart = () => {
  const { item, AllItemRemove,totalItem,totalAmount } = useContext(CartContext);

  if(item.length === 0){
    return (
      <>
      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem}</span>
          items in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map(val => {
                return <Items {...val} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>0</span>
          </h3>
          <button>checkOut</button>
        </div>
        <div className="card-total">
          <button onClick={AllItemRemove}>Clear All Card</button>
        </div>
      </section>
      </>
    )
  }

  return (
    <>
      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem}</span>
          items in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map(val => {
                return <Items {...val} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}₹</span>
          </h3>
          <button>checkOut</button>
        </div>
        <div className="card-total">
          <button onClick={AllItemRemove}>Clear All Card</button>
        </div>
      </section>
    </>
  );
};

export default UseContxtCart;
