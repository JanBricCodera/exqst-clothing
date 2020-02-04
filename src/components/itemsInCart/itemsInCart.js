import React from "react";
import "./itemsInCart.styles.scss";

const itemsInCart = ({ item }) => (
  <div className="cart-item">
    <img src={item.imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{item.name}</span>
      <p>
        {item.quantity} x ${item.price}
      </p>
    </div>
  </div>
);

export default itemsInCart;
