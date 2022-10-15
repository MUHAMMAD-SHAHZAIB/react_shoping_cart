import React, { useContext } from "react";
import { ZaibContext } from "./ZaibCart";

const ZaibItems = ({ id, name, price, description, img,quantity }) => {

  const { RemoveItem,Inc,Dec} = useContext(ZaibContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="img" />
        </div>
        <div className="title">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fa-solid fa-minus minus" onClick={()=>Dec(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fa-solid fa-plus add" onClick={()=>Inc(id)}></i>
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

export default ZaibItems;
