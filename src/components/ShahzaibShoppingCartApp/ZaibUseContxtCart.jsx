import React, { useContext } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import ZaibItems from "./ZaibItems";
import { ZaibContext } from "./ZaibCart";
// import { Products } from "./Product";

const ZaibUseContxtCart = () => {
  const {item,totalItem,totalAmount}  = useContext(ZaibContext);
  // const [item, setItem] = useState(Products);
 

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
                return <ZaibItems {...val} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}</span>
          </h3>
          <button>checkOut</button>
        </div>
      </section>
    </>
  );
};

export default ZaibUseContxtCart;
