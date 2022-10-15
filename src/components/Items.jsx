import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, title, description, price, img ,quantity}) => {
  //! it call the remove item method.
  const { RemoveItem,Increment,Decrement} = useContext(CartContext);


  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="img" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fa-solid fa-minus minus" onClick={()=>Decrement(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fa-solid fa-plus add" onClick={()=>Increment(id)}></i>
        </div>
        <div className="price">
          <h3>{price}</h3>
        </div>
        <div className="remove-item">
          <i
            className="fa-solid fa-trash remove"
            onClick={() => RemoveItem(id)}
          ></i>
        </div>
      
      </div>
      <hr />
    </>
  );
};

export default Items;
