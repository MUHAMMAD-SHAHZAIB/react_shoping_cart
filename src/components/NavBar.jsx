import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "./Cart";

const NavBar = () => {
  const { totalItem } = useContext(CartContext);
  return (
    //! This is Navbar components
    <>
      <header>
        <div className="continue-shopping">
          <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shoping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart-logo" />
          <p>{totalItem}</p>
        </div>
      </header>
    </>
  );
};

export default NavBar;
