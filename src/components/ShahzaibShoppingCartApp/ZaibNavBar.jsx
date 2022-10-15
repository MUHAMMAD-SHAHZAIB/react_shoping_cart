import React, { useContext } from "react";
import "./ZaibCart.css";
import { ZaibContext } from "./ZaibCart";

// import { ZaibContext } from "./ZaibCart";

const ZaibNavBar = () => {
  const { totalItem } = useContext(ZaibContext);
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

export default ZaibNavBar;
