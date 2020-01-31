import React from "react";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import "./cartIcon.styles.scss";

const cartIcon = () => (
  <div className="cart-icon">
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default cartIcon;
